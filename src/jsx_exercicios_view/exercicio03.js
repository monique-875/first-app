import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView03() {
  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>Exercício 3 — Espaçamento com space-between</Text>
      <View style={styles.exemplo}>
        <View
          style={{ flexDirection: "row", height:100 , whidth: "100%", gap: 8, justifyContent: 'space-between'}}
        >
          <View style={[styles.redBox, ]}>
            <Text style={styles.textBox}>R</Text>
          </View>
          <View style={[styles.blueBox, ]}>
            <Text style={styles.textBox}>G</Text>
          </View>
          <View style={[styles.greenBox, ]}>
            <Text style={styles.textBox}>B</Text>
          </View>
        </View>

        
        <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
          <View style={[styles.box, { height: 70 }]}></View>
          <View style={[styles.box, { height: 70 }]}></View>
          <View style={[styles.box, { height: 70 }]}></View>
          <View style={[styles.box, { height: 70 }]}></View>
          <View style={[styles.box, { height: 70 }]}></View>
          <View style={[styles.box, { height: 70 }]}></View>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
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
  

