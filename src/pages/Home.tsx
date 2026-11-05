"use client";
import { StyleSheet, Text, View } from "react-native";
import Cabecera from "../components/Cabecera";
import Indicadores from "../components/Indicadores";
import PanelAcciones from "../components/PanelAcciones";
import { useContextMascota } from "../providers/ProviderMascota";

export default function Home() {
  const { mascota } = useContextMascota();

  return (
    <View style={styles.container}>
      {mascota.necesitaAyuda && (
        <Text style={styles.alerta}>¡Noo, llegó a 0 :c!</Text>
      )}

      <Cabecera />
      <Indicadores />
      <PanelAcciones />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF7ED",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 60,
  },
  alerta: {
    color: "red",
    fontWeight: "bold",
    marginBottom: 10,
  },
});
