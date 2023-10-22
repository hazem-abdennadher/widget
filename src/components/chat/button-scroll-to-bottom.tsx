"use client";

import { useAtBottom } from "../../hooks/use-at-bottom";
import { Button, type ButtonProps } from "../ui/button";
import { IconArrowDown } from "../ui/icons";
import { RefObject } from "react";
import { cn } from "../../lib/utils";

interface IButtonScrollToBottom extends ButtonProps {
  area: RefObject<HTMLDivElement>;
  className?: string;
}

export function ButtonScrollToBottom({
  className,
  area,
  ...props
}: IButtonScrollToBottom) {
  const isAtBottom = useAtBottom(area);

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "bg-widget-background transition-opacity duration-300",
        isAtBottom ? "opacity-0" : "opacity-100",
        className || ""
      )}
      onClick={() => {
        area?.current?.scrollTo({
          top: area?.current.scrollHeight,
          behavior: "smooth",
        });
      }}
      {...props}
    >
      <IconArrowDown />
      <span className="sr-only">Scroll to bottom</span>
    </Button>
  );
}
