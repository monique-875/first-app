import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView02() {
  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>Exercício 2 — Três Caixas em Linha</Text>
      <View style={styles.exemplo}>
        <View
          style={{ flexDirection: "row", height:200 , whidth: "100%", gap: 8 }}
        >
          <View style={[styles.redBox, { flex: 1 }]}>
            <Text style={styles.textBox}>R</Text>
          </View>
          <View style={[styles.blueBox, { flex: 1 }]}>
            <Text style={styles.textBox}>G</Text>
          </View>
          <View style={[styles.greenBox, { flex: 1}]}>
            <Text style={styles.textBox}>B</Text>
          </View>
        </View>

        
        <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
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
    gap: 8,
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
  

