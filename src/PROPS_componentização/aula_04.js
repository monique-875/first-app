import{View, Text} from "react-native"


// export default function CartaoPerfil(props){
//     return(
//         <View>
//             <Text>Nome: {props.nome}</Text>
//             <Text>Idade: {props.idade}</Text>
//         </View>
//     )
// }

export default function CartaoPerfil({nome, idade}){
    return<Text>{nome} - {idade} anos</Text>
}



 
    
