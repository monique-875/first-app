import { View, Text, ScrollView, StyleSheet } from "react-native";
export default function Lista01() {
    const linguagem = "JavaScript";
  const ano = 2025;
  const preco = 49.9;
   

{/* exercicio 3  Função*/}
function formatarPreco(numero) {
    return `R$ o preço atual é  ${numero.toFixed(2)}`
}
// Exercicio1
return (
<ScrollView style={styles.container}>
<Text style={styles.titulo}>Lista 01 - Monique Juliane da Silva Fonseca</Text>
<View style={styles.card}>
<Text style={styles.label}>Exercício 1 - View com Text </Text>
<Text style={styles.exercico_01}> Olá</Text>
<Text style={styles.exercico_01}> Mundo</Text>

{/* //exercicio 2 */}

</View>
<View style={styles.card}>
<Text style={styles.label}>Exercício 2 - Variaveis no JSx </Text>
<Text style={styles.exercico_02}> linguagem : {linguagem}</Text>
<Text style={styles.exercico_02}> ano : {ano}</Text>
</View>

{/* exercicio3 */}
<View style={styles.card}>
<Text style={styles.label}>Exercício 3 - função jsx </Text>
<Text style={styles.exercico_03}>{formatarPreco(preco)}</Text>
</View>



</ScrollView>


);
  }
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#F5F5F5",
paddingTop: 60,
},
titulo: {
fontSize: 22,
fontWeight: "bold",
textAlign: "center",
marginBottom: 20,
color: "#212121",
},

card: {
backgroundColor: "#FFF",
marginHorizontal: 16,
marginBottom: 16,
padding: 16,
borderRadius: 8,
borderWidth: 1,
borderColor: "#E0E0E0",
},
label: {
fontSize: 14,
fontWeight: "bold",
color: "#1565C0",
marginBottom: 8,
borderBottomWidth: 1,
borderBottomColor: "#E0E0E0",
paddingBottom: 8,
},
texto: {
fontSize: 14,
color: "#424242",
lineHeight: 22,
},
});