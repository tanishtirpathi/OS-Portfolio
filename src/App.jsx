import { useState, useEffect } from "react";
import PowerScreen from "./layouts/PowerScreen";
import LockScreen from "./layouts/LockScreen";
import Desktop from "./layouts/DesktopWindow";

export default function App() {
  const [stage, setStage] = useState(null);

  useEffect(() => {
    const savedState = localStorage.getItem("os_state");
    const savedTime = localStorage.getItem("os_state_time");
    if (!savedState || !savedTime) {
      setStage("power");
      return;
    }

    const lastVisit = Number(savedTime);
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    if (now - lastVisit < oneDay) {
      if (savedState === "power") {
        setStage("power");
      } else {
        setStage("lock");
      }
      return;
    }
    setStage("power");
  }, []);

  useEffect(() => {
    if (!stage) return;
    localStorage.setItem("os_state", stage);
    localStorage.setItem("os_state_time", String(Date.now()));
  }, [stage]);

  if (!stage) return null;

  return (
    <>
      {stage === "power" && <PowerScreen goNext={() => setStage("lock")} />}
      {stage === "lock" && <LockScreen goNext={() => setStage("desktop")} />}
      {stage === "desktop" && <Desktop setStage={setStage} />}
    </>
  );
}
