// ============================================
// Arquivo Base
// ============================================

import { View, Text, StyleSheet } from "react-native";

export default function Exemplo_02() {
  const nome = "Leticia";
  const idade = "17";
  const preco = "40.6";

  const usuario = {
    nome: " Ana",
    cidade: "Salto",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>1 Variaveis</Text> // titulo
      <Text style={styles.subtitulo}>Variaveis Comuns</Text> // subtitulo
      
      <View style={styles.exemplo}> // Exemplo o estilo faz formar os bloquinhos
        <Text>Nome: {nome.toUpperCase()}</Text>
        <Text>idade: {idade}</Text>
        <Text>Preço: {preco* 2}</Text>

      </View>

    <View style={styles.exemplo}> // exemplo

     <Text>Nome: {usuario.nome}</Text>
      <Text>Cidade: {usuario.cidade}</Text>
    
</View>


</View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4285f4",
    marginBottom: 8,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});
