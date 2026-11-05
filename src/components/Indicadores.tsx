import { StyleSheet, Text, View } from "react-native";
import { useContextMascota } from "../providers/ProviderMascota";

export default function Indicadores() {
  const { mascota } = useContextMascota();

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Alimento: {mascota.alimento}</Text>
      <Text style={styles.texto}>Energía: {mascota.energia}</Text>
      <Text style={styles.texto}>Ánimo: {mascota.animo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: "center",
  },
  texto: {
    fontSize: 16,
    marginVertical: 4,
    color: "#2D4030",
    fontWeight: "bold",
  },
});
