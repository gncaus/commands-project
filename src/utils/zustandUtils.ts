import { StoreApi } from "zustand";

export function createSetValue<T>(set: StoreApi<T>["setState"]) {
  return <V>(path: string | string[], value: V) => {
    const keys = Array.isArray(path) ? path : path.split(".");

    set((state) => {
      if (keys.length === 1) {
        // Caso simples: atualizar uma propriedade de nível superior
        return { ...state, [keys[0]]: value };
      }

      // Caso aninhado: construir o novo estado com spread
      const newState = { ...state };
      let current: any = newState;

      // Navegar até o penúltimo nível
      for (let i = 0; i < keys.length - 1; i++) {
        current[keys[i]] = { ...current[keys[i]] }; // Clonar o objeto aninhado
        current = current[keys[i]];
      }

      // Atualizar o valor no último nível
      current[keys[keys.length - 1]] = value;

      return newState;
    });
  };
}
