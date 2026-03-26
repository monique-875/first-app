import { StyleSheet, View, Text } from "react-native";

export default function ExercicioView08() {
  return (
    <View style={styles.container}>
      
      <View style={styles.sidebar}>
        <Text style={{color:"white"}}>Sidebar</Text>
      </View>

      <View style={styles.conteudo}>
        <View style={[styles.card, {backgroundColor:"green"}]}>
          <Text>Card 1</Text>
        </View>

        <View style={[styles.card, {backgroundColor:"orange"}]}>
          <Text>Card 2</Text>
        </View>

        <View style={[styles.card, {backgroundColor:"blue"}]}>
          <Text>Card 3</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    flexDirection:"row"
  },

  sidebar:{
    width:80,
    backgroundColor:"#444",
    justifyContent:"center",
    alignItems:"center"
  },

  conteudo:{
    flex:1,
    padding:10,
    gap:10
  },

  card:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }

});