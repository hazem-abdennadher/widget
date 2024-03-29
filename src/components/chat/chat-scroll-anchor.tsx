import * as React from "react";
import { useInView } from "react-intersection-observer";

import { useAtBottom } from "../../hooks/use-at-bottom";
import { RefObject } from "react";

interface ChatScrollAnchorProps {
  trackVisibility?: boolean;
  area?: RefObject<HTMLDivElement>;
}

export function ChatScrollAnchor({
  area,
  trackVisibility,
}: ChatScrollAnchorProps) {
  const isAtBottom = useAtBottom(area);
  const { ref, entry, inView } = useInView({
    trackVisibility,
    delay: 100,
    rootMargin: "0px 0px -150px 0px",
    root: area?.current,
  });

  React.useEffect(() => {
    if (isAtBottom && trackVisibility && !inView) {
      entry?.target.scrollIntoView({
        block: "start",
      });
    }
  }, [inView, entry, isAtBottom, trackVisibility]);

  return <div ref={ref} className="h-px w-full" />;
}
