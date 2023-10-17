import { FC } from "react";
import { Icon } from "../../lib/module-export";
import { cn } from "../../lib/utils";

export const LOADING_ICON = "line-md:loading-twotone-loop";

export const DOT_LOADING_ICON = "svg-spinners:3-dots-bounce";

const Loading: FC<{ className?: string }> = ({ className }) => {
  return (
    <Icon icon={LOADING_ICON} className={cn("text-2xl", className || "")} />
  );
};

export default Loading;
