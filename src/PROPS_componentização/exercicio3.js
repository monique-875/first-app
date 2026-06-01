import{View, Text} from "react-native"

export default function Saudacao(props){
    return(
        <View>
            <Text> Olá {props.nome} ,Bem-vinda</Text>
            
        </View>
    )
}