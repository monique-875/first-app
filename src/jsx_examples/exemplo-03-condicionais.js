// ============================================
// Arquivo Base
// ============================================

import { View, Text, StyleSheet } from "react-native";

export default function Exemplo_03() {
    const logado = false;
    const temNotificacoes = false;
    return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Condicionais </Text>
      <Text style={styles.subtitulo}>Ternário</Text>
      <Text >Status  : {Logado ? "Logado" : "Deslogado"}</Text>
  

      <View style={styles.exemplo}> // Exemplo o estilo faz formar os bloquinhos
        <Text style ={styles.subtitulo}>Condicional com &&</Text>
        <Text>temNotificacoes</Text>
        {temNotificacoes &&<Text> Voce tem notificacoes</Text>}
        {temNotificacoes &&<Text> Voce  nao tem novas  notificacoes</Text>}
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
