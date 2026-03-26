import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView07() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 5 — Layout de Duas Colunas</Text>

      <View style={styles.linha}>
        <View style={styles.VerdeBox} />
        <View style={styles.VermelhoBox} />
      </View>

      <View style={styles.linha}>
        <View style={styles.AzulBox} />
        <View style={styles.AmareloBox} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 18,
  },

  linha: {
    flex: 1,
    flexDirection: "row",
    gap: 18,
  },

  VerdeBox: {
    flex: 1,
    backgroundColor: "green",
  },

  VermelhoBox: {
    flex: 1,
    backgroundColor: "red",
  },

  AzulBox: {
    flex: 1,
    backgroundColor: "blue",
  },

  AmareloBox: {
    flex: 1,
    backgroundColor: "orange",
  },
});