import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./Navigation/exemplos/stack_navigator";

import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./Navigation/exemplos/bottom_tab_navigator";
import DrawerNavigator from "./Navigation/exemplos/drawer_navigator";

// import CartaoPerfil from "./PROPS_componentização/aula_04";
// import CardProduto from "./PROPS_componentização/exercicio1";
// import CartaoUsuario from "./PROPS_componentização/exercicio2";
// import Saudacao from "./PROPS_componentização/exercicio3";
// import PerfilAluno from "./PROPS_componentização/exercicio4";
// import Botao from "./PROPS_componentização/desafio";
// import ContadorExemple from "./HOOKS/useState_exemple";
// import TelaDeLogin from "./HOOKS/useRef_exemple";
// import TelaMoeda from "./HOOKS/useEffect_exemple";
//import FlatListExemplo from "./flatlist/flatlist_example.js";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Somativa01 />
//     </View>
//   );
// }

export default function App() {
  return (
    // Apenas um
    <NavigationContainer> 
      <DrawerNavigator/>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
