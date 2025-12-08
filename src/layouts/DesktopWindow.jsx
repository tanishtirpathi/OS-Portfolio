import Dock from "../components/Dock";
import AppWindow from "../components/AppWindow";
import { useAppStore } from "../store/Appstore";
import TopBar from "../components/TopBar";
export default function Desktop({ setStage }) {
  const windows = useAppStore((s) => s.windows);

  return (
    <div className="relative w-screen h-screen max-w-screen max-h-screen overflow-hidden bg-[url('./bg.png')] bg-cover">
      
      <div className="absolute left-0 right-0 top-0 z-40">
        <TopBar 
          appTitle={windows.length ? windows[windows.length - 1].appId : ""} 
          setStage={setStage}
        />
      </div>

      {windows.map((w) => (
        <AppWindow window={w} key={w.id} />
      ))}

      <Dock />
    </div>
  );
}
