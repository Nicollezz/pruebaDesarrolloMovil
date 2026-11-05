import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { useContextMascota } from "../providers/ProviderMascota";

export default function Cabecera() {
  const { mascota, setNombre } = useContextMascota();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/pixelCat.jpg")}
        style={styles.imagen}
      />
      <br></br>
      <TextInput
        style={styles.input}
        value={mascota.nombre}
        onChangeText={setNombre}
        placeholder="Ingresa el nombre"
      />
      <br></br>
      <Text style={styles.texto}>Nombre: {mascota.nombre}</Text>
      <br></br>
      <Text style={styles.texto}>Estado de Ánimo: {mascota.estadoAnimo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 15,
  },
  imagen: {
    width: 120,
    height: 120,
    borderRadius: 80,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#2D4030",
    padding: 8,
    width: 300,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  texto: {
    fontSize: 16,
    color: "#2D4030",
    fontWeight: "bold",
  },
});
