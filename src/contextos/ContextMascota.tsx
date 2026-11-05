import { createContext } from "react";
import { Mascota } from "../modelos/Mascota";

export const ContextMascota = createContext({
  mascota: {} as Mascota,
  setNombre: (nombre: string) => {},
  alimentar: () => {},
  jugar: () => {},
  descansar: () => {},
  reiniciar: () => {},
});
