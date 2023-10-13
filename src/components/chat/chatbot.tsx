import { FunctionComponent } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface ChatbotProps {}
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import ChatFooter from "./footer";
import { Separator } from "../ui/separator";
import { ChatInput } from "./chat-input";
import ChatMessageList from "./chat-message-list";

const Chatbot: FunctionComponent<ChatbotProps> = () => {
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
          <ChatMessageList messages={Messages} />
          <ChatInput />
          <Separator />
          <ChatFooter />
        </PopoverContent>
      </Popover>
    </div>
  );
};

const Messages: {
  me: boolean;
  text: string;
}[] = [
  { me: false, text: "Hello, how can I help you today?" },
  { me: true, text: "Hi, I'm having trouble with my account." },
  { me: false, text: "Sure, what seems to be the issue?" },
  { me: true, text: "I can't seem to log in." },
  { me: false, text: "Have you tried resetting your password?" },
  { me: true, text: "Yes, but it's still not working." },
  {
    me: false,
    text: "Let me check your account. Can you please provide me with your email address?",
  },
  { me: true, text: "Sure, it's john@example.com." },
  {
    me: false,
    text: "Thank you. I will look into this and get back to you shortly.",
  },
];

export default Chatbot;
