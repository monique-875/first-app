import { useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native"

export default function ListadeCompras() {
  const [produto, setProduto] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [quantidade, setQuantidade] = useState("");

  function handleEnviar() {
    if (produto.trim() === "" && quantidade === 0) {
      Alert.alert("Atenção", "O nome do produto não pode ficar vazio!!!");
      return; //pra não cair no console
    }
    const novoProduto = {
      id: Date.now().toString(),
      item: quantidade + produto,
      nome: produto,
      prioridade: prioridade.trim() || "normal",
    };

    setProdutos([...produto, novoProduto]);

    setProdutos("");
    setPrioridade("");
    setQuantidade("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Formularios flatlist </Text>
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}> 1. Formulario com flatlist</Text>
        <TextInput
          style={styles.input}
          value={produto}
          onChangeText={setProduto}
          placeholder="Nome do produto"
        ></TextInput>

        <TextInput
          style={styles.input}
          value={quantidade}
          onChangeText={setQuantidade}
          placeholder="Digite a quantidade do produto"
          keybordType= "numeric"
        ></TextInput>

        <TextInput
          style={styles.input}
          value={prioridade}
          onChangeText={setPrioridade}
          placeholder="Prioridade (alta, media ou baixa)"
        ></TextInput>

        <TouchableOpacity style={styles.botao} onPress={handleAdicionar}>
          <Text> Adicionar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
