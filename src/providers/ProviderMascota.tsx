import { useContext, useEffect, useState } from "react";
import { ContextMascota } from "../contextos/ContextMascota";
import { Mascota } from "../modelos/Mascota";
import { Plantilla } from "./Plantilla";

export default function ProviderMascota(prop: Plantilla) {
  const [nombre, setNombre] = useState("Pixel");
  const [alimento, setAlimento] = useState(60);
  const [energia, setEnergia] = useState(60);
  const [animo, setAnimo] = useState(60);

  useEffect(() => {
    console.log("Holaaa!:", nombre);
  }, [nombre, alimento, energia, animo]);

  function limitar(valor: number): number {
    if (valor < 0) return 0;
    if (valor > 100) return 100;
    return valor;
  }

  function alimentar() {
    setAlimento(limitar(alimento + 20));
    setEnergia(limitar(energia - 5));
    setAnimo(limitar(animo + 5));
  }

  function jugar() {
    if (energia < 15) return;
    setAlimento(limitar(alimento - 10));
    setEnergia(limitar(energia - 15));
    setAnimo(limitar(animo + 20));
  }

  function descansar() {
    setAlimento(limitar(alimento - 10));
    setEnergia(limitar(energia + 25));
    setAnimo(limitar(animo - 5));
  }

  function reiniciar() {
    setAlimento(60);
    setEnergia(60);
    setAnimo(60);
  }

  let estadoAnimo = "Normal";
  if (alimento === 0 || energia === 0 || animo === 0) {
    estadoAnimo = "Crítico";
  } else {
    const promedio = (alimento + energia + animo) / 3;
    if (promedio >= 75) estadoAnimo = "Feliz";
    else if (promedio >= 40) estadoAnimo = "Normal";
    else estadoAnimo = "Decaído";
  }

  const necesitaAyuda = alimento === 0 || energia === 0 || animo === 0;
  const puedeJugar = energia >= 15;

  const mascota: Mascota = {
    nombre,
    alimento,
    energia,
    animo,
    estadoAnimo,
    necesitaAyuda,
    puedeJugar,
  };

  return (
    <ContextMascota.Provider
      value={{ mascota, setNombre, alimentar, jugar, descansar, reiniciar }}
    >
      {prop.children}
    </ContextMascota.Provider>
  );
}

export const useContextMascota = () => {
  return useContext(ContextMascota);
};
