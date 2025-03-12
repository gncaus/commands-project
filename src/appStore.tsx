import { create } from "zustand";
import { createSetValue } from "./utils/zustandUtils";

interface AppState {
  isDelivery: boolean;
  setValue: <V>(path: string | string[], value: V) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isDelivery: false,
  setValue: createSetValue(set),
}));
