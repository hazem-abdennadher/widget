import { type UseChatHelpers } from "ai/react";

import { Button } from "../ui/button";
import { PromptForm } from "./prompt-form";
import { IconRefresh, IconStop } from "../ui/icons";
import { RefObject } from "react";
import { ButtonScrollToBottom } from "./button-scroll-to-bottom";

export interface ChatPanelProps
  extends Pick<
    UseChatHelpers,
    | "append"
    | "isLoading"
    | "reload"
    | "messages"
    | "stop"
    | "input"
    | "setInput"
  > {
  id?: string;
  chatArea: RefObject<HTMLDivElement>;
}

export function ChatPanel({
  id,
  isLoading,
  stop,
  append,
  reload,
  input,
  setInput,
  messages,
  chatArea,
}: ChatPanelProps) {
  return (
    <>
      <div className="flex h-10 items-center justify-center gap-2">
        {isLoading ? (
          <Button
            variant="outline"
            onClick={() => stop()}
            className="bg-transparent"
          >
            <IconStop className="mr-2" />
            stop generating
          </Button>
        ) : (
          messages?.length > 0 && (
            <Button
              variant="outline"
              onClick={() => reload()}
              className="bg-transparent"
            >
              <IconRefresh className="mr-2" />
              regenerate response
            </Button>
          )
        )}
        <ButtonScrollToBottom area={chatArea} />
      </div>
      <div className="space-y-4 border-t bg-transparent ">
        <PromptForm
          onSubmit={async (value) => {
            await append({
              id,
              content: value,
              role: "user",
            });
          }}
          input={input}
          setInput={setInput}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}
