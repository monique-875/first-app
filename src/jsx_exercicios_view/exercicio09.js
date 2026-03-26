import { StyleSheet, View } from "react-native";

export default function ExercicioView09() {
  return (
    <View style={styles.container}>

      <View style={styles.semaforo}>

        <View style={[styles.luz, {backgroundColor:"red"}]} />

        <View style={[styles.luz, {backgroundColor:"yellow"}]} />

        <View style={[styles.luz, {backgroundColor:"green"}]} />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },

  semaforo:{
    backgroundColor:"black",
    padding:20,
    borderRadius:20,
    justifyContent:"space-evenly",
    alignItems:"center",
    gap:20
  },

  luz:{
    width:80,
    height:80,
    borderRadius:40
  }

});