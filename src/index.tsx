import { createRoot } from "react-dom/client";
import "./index.css";
import Chatbot from "./chatbot";
import { TooltipProvider } from "./components/ui/tooltip";
document.addEventListener("DOMContentLoaded", () => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  const root = createRoot(div);

  root.render(
    <TooltipProvider>
      <Chatbot />
    </TooltipProvider>
  );
});
