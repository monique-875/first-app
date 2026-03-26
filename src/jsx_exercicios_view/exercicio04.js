import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView04() {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.titulo}>Exercício 4 — Caixa Centralizada</Text>
      <View
        style={{
          flexDirection: "row",
          gap: 8,
          alignItems:"center"
        }}
      >
        <View style={[styles.redBox]}>
          <Text style={styles.textBox}>centro</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    justifyContent: "center",
    alignItems:"center"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  redBox: {
    height: 90,
    width: 90,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
