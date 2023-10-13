import { FunctionComponent } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface ChatMessageProps {
  me?: boolean;
  text: string;
}

const ChatMessage: FunctionComponent<ChatMessageProps> = ({ text, me }) => {
  return (
    <div className={`flex items-start gap-2 ${me ? "flex-row-reverse" : ""}`}>
      <div className="flex-shrink-0">
        {me ? null : (
          <Avatar className="bg-primary cursor-pointer">
            <AvatarImage src="https://i.ibb.co/cFTrtmk/icon-512x512.png" />
            <AvatarFallback>Corolair</AvatarFallback>
          </Avatar>
        )}
      </div>
      <div
        className={`flex flex-col items-start space-y-1 ${
          me ? "items-end" : ""
        }`}
      >
        <div
          className={`px-4 py-2 rounded-xl ${
            me ? "bg-primary text-white" : "bg-gray-100 text-gray-900"
          }`}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
