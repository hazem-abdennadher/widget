import { createRoot } from "react-dom/client";

document.addEventListener("DOMContentLoaded", () => {
  const div = document.getElementById("simple-calendar")!;

  const root = createRoot(div);

  root.render(<h1>Hello World</h1>);
});
