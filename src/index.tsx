import { createRoot } from "react-dom/client";
import "./index.css";
document.addEventListener("DOMContentLoaded", () => {
  const div = document.getElementById("simple-calendar")!;

  const root = createRoot(div);

  root.render(<div className="text-7xl text-red-700">Hello World</div>);
});
