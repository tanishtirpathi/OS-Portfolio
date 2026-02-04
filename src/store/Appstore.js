import { create } from "zustand";

export const useAppStore = create((set) => ({
  windows: [],

  openApp: (appId, component) =>
    set((state) => ({
      windows: [
        ...state.windows,
        {
          id: Date.now(),
          appId,
          component,
          minimized: false,
          z: state.windows.length + 1,
        },
      ],
    })),

  closeApp: (id) =>
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
    })),

  focusApp: (id) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, z: state.windows.length + 10 } : w
      ),
    })),
}));
