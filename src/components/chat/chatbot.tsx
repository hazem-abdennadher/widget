import { FunctionComponent, useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { v4 } from "uuid";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import ChatFooter from "./footer";
import axios from "axios";
import { Message } from "ai";
import { ChatList } from "./chat-list";
import { cn } from "../../lib/utils";
import { ChatScrollAnchor } from "./chat-scroll-anchor";
import { convesationLogToInitialMessages } from "./helpers";
import { useChat } from "ai/react";
import { ChatPanel } from "./chat-panel";
import { useToast } from "../ui/use-toast";
import { EmptyScreen } from "./empty-screen";
import InviteForm from "./invite-form";
interface ChatbotProps {
  chatbotId: string;
}
const Chatbot: FunctionComponent<ChatbotProps> = ({ chatbotId }) => {
  const [sessionId, setSessionId] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [conversations, setConversation] = useState<Message[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    if (localStorage.getItem("sessionId") === null) {
      const id = v4();
      localStorage.setItem("sessionId", id);
      setSessionId(id);
    } else {
      setSessionId(localStorage.getItem("sessionId") as string);
    }

    if (localStorage.getItem("username") !== null) {
      setUsername(localStorage.getItem("username") as string);
    }
  }, []);

  useEffect(() => {
    if (!sessionId) return;
    const getData = async () => {
      try {
        const { data } = await axios.post(
          `https://prod-git-feat-widget-corolair.vercel.app/api/widget/history/`,
          {
            sessionId: sessionId,
            chatbotId: chatbotId,
          }
        );

        setConversation(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [sessionId, chatbotId]);

  const chatArea = useRef<HTMLDivElement>(null);

  const {
    messages,
    append,
    reload,
    stop,
    isLoading,
    input,
    setInput,
    setMessages,
  } = useChat({
    api: `https://prod-git-feat-widget-corolair.vercel.app/api/widget/chat/`,
    id: sessionId,

    body: {
      sessionId: sessionId,
      chatbotId: chatbotId,
      username: username,
    },

    onResponse(response) {
      if (response.status === 401) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description:
            "There was a problem with your request. please try again",
        });
      }
    },

    initialMessages: convesationLogToInitialMessages(
      // @ts-ignore
      conversations
    ) as Message[],
  });
  console.log({ conversations });
  // ! not the best, but it works for now, we simply set the message since the initialMessages on the useChat is not working
  useEffect(() => {
    if (conversations) {
      setMessages(convesationLogToInitialMessages(conversations) as Message[]);
    }
  }, [conversations]);

  useEffect(() => {
    chatArea?.current?.scrollTo({
      top: chatArea?.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages?.length, chatArea?.current?.scrollHeight]);

  return (
    <div className="fixed bottom-4 right-4">
      <Popover>
        <PopoverTrigger asChild>
          <Avatar className="bg-primary cursor-pointer">
            <AvatarImage src="src/assets/icons/logo.png" />
            <AvatarFallback>Corolair</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-[465px] space-y-2">
          {username ? (
            <>
              <div className="h-[50vh]">
                {messages.length ? (
                  <div
                    ref={chatArea}
                    className={cn("h-[50vh] w-full overflow-y-scroll")}
                  >
                    <ChatList messages={messages} />
                    <ChatScrollAnchor
                      area={chatArea}
                      trackVisibility={isLoading}
                    />
                  </div>
                ) : (
                  <EmptyScreen setInput={setInput} />
                )}
              </div>
              <ChatPanel
                isLoading={isLoading}
                stop={stop}
                append={append}
                reload={reload}
                messages={messages}
                input={input}
                setInput={setInput}
                chatArea={chatArea}
              />
            </>
          ) : (
            <InviteForm saveUsername={setUsername} />
          )}

          <ChatFooter />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Chatbot;
