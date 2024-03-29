import { UseChatHelpers } from "ai/react";
import * as React from "react";
import Textarea from "react-textarea-autosize";

import { Button } from "../ui/button";
import { IconArrowElbow } from "../ui/icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { useEnterSubmit } from "../../hooks/use-enter-submit";
import { Icon } from "../../lib/module-export";
import { cn } from "../../lib/utils";
import { DOT_LOADING_ICON } from "../ui/loading";

export interface PromptProps
  extends Pick<UseChatHelpers, "input" | "setInput"> {
  onSubmit: (value: string) => Promise<void>;
  isLoading: boolean;
}

export function PromptForm({
  onSubmit,
  input,
  setInput,
  isLoading,
}: PromptProps) {
  const { formRef, onKeyDown } = useEnterSubmit();
  const inputRef = React.useRef<HTMLTextAreaElement>(null as any);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!input?.trim()) {
          return;
        }
        setInput("");
        await onSubmit(input);
      }}
      ref={formRef}
    >
      <div className="relative flex max-h-60 w-full grow flex-col overflow-hidden bg-widget-background px-8 sm:rounded-md sm:border sm:px-12">
        <div
          className={cn(
            "absolute left-0 top-5 h-8 w-8 rounded-full bg-widget-background p-0 sm:left-4"
          )}
        >
          <Icon
            icon={isLoading ? DOT_LOADING_ICON : "el:magic"}
            className="text-xl"
          />
        </div>
        <Textarea
          ref={inputRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={"Send Message"}
          spellCheck={false}
          className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
        />
        <div className="absolute right-0 top-4 sm:right-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || input === ""}
              >
                <IconArrowElbow />
                <span className="sr-only">ask me</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>send question</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </form>
  );
}
