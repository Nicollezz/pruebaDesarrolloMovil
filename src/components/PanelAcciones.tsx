import { Button, StyleSheet, View } from "react-native";
import { useContextMascota } from "../providers/ProviderMascota";

export default function PanelAcciones() {
  const { alimentar, jugar, descansar, reiniciar, mascota } =
    useContextMascota();

  return (
    <View style={styles.panel}>
      <View style={styles.botonContainer}>
        <Button title="Alimentar" onPress={alimentar} color="#4CAF50" />
      </View>

      <View style={styles.botonContainer}>
        <Button
          title="Jugar"
          onPress={jugar}
          disabled={!mascota.puedeJugar}
          color="#FF9800"
        />
      </View>

      <View style={styles.botonContainer}>
        <Button title="Descansar" onPress={descansar} color="#2196F3" />
      </View>

      <View style={styles.botonContainer}>
        <Button title="Reiniciar" onPress={reiniciar} color="#E57373" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    width: "100%",
    gap: 12,
    marginTop: 15,
  },
  botonContainer: {
    overflow: "hidden",
  },
});
