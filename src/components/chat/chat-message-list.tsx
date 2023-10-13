import React from "react";
import ChatMessage from "./chat-message";

interface ChatMessageListProps {
  messages: {
    me: boolean;
    text: string;
  }[];
}

const ChatMessageList: React.FC<ChatMessageListProps> = ({ messages }) => {
  return (
    <div className="w-full flex flex-col gap-4 h-[50vh] overflow-auto">
      {messages.map((message, index) => (
        <ChatMessage key={index} {...message} />
      ))}
    </div>
  );
};

export default ChatMessageList;
