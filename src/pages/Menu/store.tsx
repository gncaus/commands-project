import { create } from "zustand";
import { createSetValue } from "../../utils/zustandUtils";

interface MenuState {
  setValue: <V>(path: string | string[], value: V) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  setValue: createSetValue(set),
}));
