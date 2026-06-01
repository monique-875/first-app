import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetalheScreen from "../screens/DetalheScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    // gerenciador da pilha;
    <Stack.Navigator initialRouteName="Home">
      {/* //registro das telas */}
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* nome da rota (utilizado para navegar); */}
      <Stack.Screen name="Detalhe" component={DetalheScreen} />
      {/* //component - o componente que será renderizado. */}
    </Stack.Navigator>
  );
}
