import React, { useState } from "react";

const Chatbot: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`fixed bottom-4 right-4 p-2 bg-blue-500 rounded-full cursor-pointer ${
        expanded ? "h-64 w-64" : "h-12 w-12"
      }`}
      onClick={handleToggle}
    >
      {expanded ? (
        <div className="bg-white p-4 h-full">
          <div className="flex justify-between mb-2">
            <div className="font-bold text-lg">Chatbot</div>
            <div
              className="cursor-pointer text-xl"
              onClick={() => setExpanded(false)}
            >
              X
            </div>
          </div>
        </div>
      ) : (
        <div className="text-white text-xl text-center">Chat</div>
      )}
    </div>
  );
};

export default Chatbot;
