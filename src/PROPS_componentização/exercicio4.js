import{View, Text} from "react-native"


export default function PerfilAluno(props){
    return(
        <View>
            <Text>Nome: {props.nome}</Text>
            <Text>turma: {props.turma}</Text>
            <Text>matricula: {props.matricula}</Text>
        </View>
    )
}