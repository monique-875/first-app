import { StyleSheet, Text, View } from "react-native";
import ExercicioView01 from "./jsx_exercicios_view/exercicio10";

export default function App() {
  return (
    <View style={styles.container}>
      <ExercicioView01 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
