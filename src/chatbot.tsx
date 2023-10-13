import { useState } from "react";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="fixed w-16 h-16 bg-blue-600 bottom-10 right-10 rounded-full border-red-600 z-50"
      onClick={() => setOpen((s) => !s)}
    >
      {open ? "Open" : "Closed"}
    </div>
  );
};

export default Chatbot;
