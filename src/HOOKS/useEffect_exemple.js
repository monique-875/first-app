import {useEffect, useState} from "react"
import{View, StyleSheet, Text, Alert, Button } from "react-native"

export default function TelaMoeda(){
    const [moedas, setMoedas] = useState(0)
    useEffect(() => {
        console.log("executou")
        if (moedas === 5){
            Alert.alert("Sucesso, voce desbloqueou o bau!")
        }
    }, [])


return(
    <View style={styles.conteiner}>
   <Text style={styles.texto}>Moedas coletadas : {moedas}</Text>
   <Button title="Pegar moedas" onPress={() => setMoedas(moedas + 1)} ></Button>
    </View>
)
}

const styles = StyleSheet.create({
container: { flex: 1, justifyContent: "center", alignItems: "center" },
texto: { fontSize: 24, marginBottom: 20 },
});
