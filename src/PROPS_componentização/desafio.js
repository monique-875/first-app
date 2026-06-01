import{View, Text, TouchableOpacity, StyleSheet} from "react-native"


export default function Botao(props){
    return(
        <TouchableOpacity style= {styles.button}>
            <Text>{props.titulo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});