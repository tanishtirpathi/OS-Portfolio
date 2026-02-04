import { useEffect } from "react";
import { catConfig } from "./cat";

export default function OnekoCat() {
  useEffect(() => {
    if (!catConfig.enabled) return;

    const script = document.createElement("script");
    script.src = "/oneko.js";
    script.setAttribute("data-cat", "/oneko.gif");
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!catConfig.enabled) return null;

  return null;
}
