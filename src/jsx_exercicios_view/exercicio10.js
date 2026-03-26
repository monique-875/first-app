import { StyleSheet, View, Text } from "react-native";

export default function ExercicioView10() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
      </View>

      <View style={styles.conteudo}>

      
        <View style={styles.linhaCards}>
          <View style={[styles.card, {backgroundColor:"red"}]}>
            <Text style={styles.text}>Card 1</Text>
          </View>

          <View style={[styles.card, {backgroundColor:"blue"}]}>
            <Text style={styles.text}>Card 2</Text>
          </View>

          <View style={[styles.card, {backgroundColor:"yellow"}]}>
            <Text style={styles.text}>Card 3</Text>
          </View>
        </View>

        
        <View style={styles.linhaPainel}>
          <View style={styles.painelPrincipal}>
            <Text style={styles.text}>Painel Principal</Text>
          </View>

          <View style={styles.painelLateral}>
            <Text style={styles.text}>Lateral</Text>
          </View>
        </View>

      </View>

      <View style={styles.footer}>
        <Text style={styles.text}>Footer</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1
  },

  header:{
    height:50,
    backgroundColor:"green",
    justifyContent:"center",
    alignItems:"center"
  },

  footer:{
    height:40,
    backgroundColor:"blue",
    justifyContent:"center",
    alignItems:"center"
  },

  conteudo:{
    flex:1,
    padding:8,
    gap:8
  },

  linhaCards:{
    flexDirection:"row",
    height:100,
    gap:8
  },

  card:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 10
  },

  linhaPainel:{
    flex:1,
    flexDirection:"row",
    gap:8
  },

  painelPrincipal:{
    flex:2,
    backgroundColor:"pink",
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 10
  },

  painelLateral:{
    flex:1,
    backgroundColor:"gray",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10
  },

  text:{
    fontWeight:"bold"
  }

});