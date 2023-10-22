import { Message } from "ai";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { CodeBlock } from "./codeblock";
import { MemoizedReactMarkdown } from "./markdown";
import { IconUser } from "../ui/icons";
import { ChatMessageActions } from "./chat-messages-actions";
import CoroLogoBlueIcon from "../ui/coro-logo-blue-icon";
import { cn } from "../../lib/utils";

export interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message, ...props }: ChatMessageProps) {
  return (
    <div className={cn("group relative mb-4 flex items-start")} {...props}>
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow",
          message.role === "user" ? "bg-widget-background" : "bg-blue-100"
        )}
      >
        {message.role === "user" ? (
          <IconUser />
        ) : (
          <CoroLogoBlueIcon size={22} />
        )}
      </div>
      <div className="flex-1 px-1 ml-4 space-y-2 overflow-hidden">
        <MemoizedReactMarkdown
          className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
          remarkPlugins={[remarkGfm, remarkMath]}
          components={{
            p({ children }) {
              return <p className="mb-2 last:mb-0">{children}</p>;
            },
            code({ className, children, ...props }) {
              if (!children) {
                return null;
              }

              if (typeof children === "string") {
                if (children.startsWith("▍")) {
                  return (
                    <span className="mt-1 cursor-default animate-pulse">▍</span>
                  );
                }

                children = children.replace("`▍`", "▍");
              }

              const match = /language-(\w+)/.exec(className || "");

              if (match) {
                return (
                  <CodeBlock
                    key={Math.random()}
                    language={match[1]}
                    value={String(children).replace(/\n$/, "")}
                    {...props}
                  />
                );
              }
            },
            table({ children }) {
              return (
                <table className="border-collapse border border-black px-3 py-1 dark:border-white">
                  <tbody>{children}</tbody>
                </table>
              );
            },
            th({ children }) {
              return (
                <th className="break-words border border-black bg-gray-500 px-3 py-1 text-white dark:border-white">
                  {children}
                </th>
              );
            },
            td({ children }) {
              return (
                <td className="break-words border border-black px-3 py-1 dark:border-white">
                  {children}
                </td>
              );
            },
            q({ children }) {
              return (
                <blockquote className="border-l-4 border-blue-500 font-bold pl-4">
                  {children}
                </blockquote>
              );
            },
            blockquote({ children }) {
              return (
                <blockquote className="border-l-4 border-blue-500 font-bold pl-4">
                  {children}
                </blockquote>
              );
            },
            h1({ children }) {
              return <h1 className="text-2xl font-bold mb-2">{children}</h1>;
            },
            h2({ children }) {
              return <h2 className="text-xl font-bold mb-2">{children}</h2>;
            },
            h3({ children }) {
              return <h3 className="text-lg font-bold mb-2">{children}</h3>;
            },
            h4({ children }) {
              return <h4 className="text-base font-bold mb-2">{children}</h4>;
            },
            h5({ children }) {
              return <h5 className="text-sm font-bold mb-2">{children}</h5>;
            },
            h6({ children }) {
              return <h6 className="text-xs font-bold mb-2">{children}</h6>;
            },
            a({ children, ...props }) {
              return (
                <a
                  className="text-blue-500 underline hover:text-blue-600"
                  {...props}
                >
                  {children}
                </a>
              );
            },
            img({ src, ...props }) {
              return (
                <img className="mx-auto" src={src} alt={props.alt} {...props} />
              );
            },
            ul({ children }) {
              return <ul className="list-disc ml-4">{children}</ul>;
            },
            ol({ children }) {
              return <ol className="list-decimal ml-4">{children}</ol>;
            },
            li({ children }) {
              return <li className="mb-1">{children}</li>;
            },
          }}
        >
          {message.content || ""}
        </MemoizedReactMarkdown>
        <ChatMessageActions message={message} />
      </div>
    </div>
  );
}
