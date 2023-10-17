import { createRoot } from "react-dom/client";
import "./index.css";
import { TooltipProvider } from "./components/ui/tooltip";
import Chatbot from "./components/chat/chatbot";
document.addEventListener("DOMContentLoaded", () => {
  const chatbot: HTMLScriptElement | null = document.querySelector(
    'script[data-name="chatbot"]'
  );

  if (chatbot === null) return;
  const chatbotId = chatbot.dataset.chatbotId;
  if (chatbotId === undefined) {
    alert("chatbotId is required on your script tag");
    return;
  }
  const div = document.createElement("div");
  document.body.appendChild(div);
  const root = createRoot(div);
  root.render(
    <TooltipProvider>
      <Chatbot chatbotId={chatbotId} />
    </TooltipProvider>
  );
});
