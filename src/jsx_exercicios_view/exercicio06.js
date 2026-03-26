import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView06() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 5 — Layout de Duas Colunas</Text>

      <View style={[styles.headerBox, { height: 60 }]}>
        <Text style={styles.textBox}>header</Text>
      </View>
      <View style={styles.MainBox}>
        <Text style={styles.textBox}>Main Content</Text>
      </View>
      <View style={[styles.FooterBox, { height: 50 }]}>
        <Text style={styles.textBox}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  headerBox: {
   
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  MainBox: {
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  FooterBox: {
    
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
