import { create } from "zustand";
import { createSetValue } from "../../utils/zustandUtils";

interface HomeState {
  counter: number;
  title: string;
  setValue: <V>(path: string | string[], value: V) => void;
}

export const useHomeStore = create<HomeState>((set) => ({
  counter: 0,
  title: "Bem-vindo à Home",
  setValue: createSetValue(set),
}));
