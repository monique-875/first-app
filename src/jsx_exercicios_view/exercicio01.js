import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView01() {
  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>Exercício 1 — Coluna de Três Caixas</Text>
      <View style={styles.exemplo}>
        <View
          style={{ flexDirection: "column", height: 270, whidth: "100%", gap: 8 }}
        >
          <View style={[styles.redBox, { flex: 1 }]}>
            <Text style={styles.textBox}>vermelho</Text>
          </View>
          <View style={[styles.blueBox, { flex: 1 }]}>
            <Text style={styles.textBox}>azul</Text>
          </View>
          <View style={[styles.greenBox, { flex: 1}]}>
            <Text style={styles.textBox}>verde</Text>
          </View>
        </View>

        
        <View style={{ flexDirection: "column", gap: 8, flexWrap: "wrap" }}>
          <View style={[styles.box, { height: 80 }]}></View>
          <View style={[styles.box, { height: 80 }]}></View>
          <View style={[styles.box, { height: 80 }]}></View>
          <View style={[styles.box, { height: 80 }]}></View>
          <View style={[styles.box, { height: 80 }]}></View>
          <View style={[styles.box, { height: 80 }]}></View>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  redBox: {
    height: 80,
    width: 80,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 80,
    width: 80,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 80,
    width: 80,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});