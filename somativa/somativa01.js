import { StyleSheet, View, Text } from "react-native";

export default function Somativa01() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          height: 100,
          whidth: "100%",
          gap: 8,
          justifyContent: "center",
        }}
      >
        <View style={[styles.yellowBox1]}>
          <Text style={styles.textBox}>Amarelo</Text>
        </View>
        <View style={[styles.blueBox1]}>
          <Text style={styles.textBox}>Azul escuro</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 8,
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <View style={[styles.box, { height: 70 }]}></View>
        <View style={[styles.box, { height: 70 }]}></View>
        <View style={[styles.box, { height: 70 }]}></View>
        <View style={[styles.box, { height: 70 }]}></View>
      </View>

      <View style={{ flexDirection: "row", gap: 8, flex: 1 }}>
        <View style={[styles.greenBox, { flex: 1 }]}>
          <Text style={styles.textBox}>Verde</Text>
        </View>

        <View style={styles.conteudo}>
          <View style={[styles.pinkBox, { flex: 1 }]}>
            <Text style={styles.textBox}>Rosa </Text>
          </View>

          <View style={[styles.orangeBox, { flex: 1 }]}>
            <Text style={styles.textBox}>Laranja</Text>
          </View>

          <View style={styles.linhaCards}>
            <View
              style={[styles.card, { backgroundColor: "red" }, { height: 60 },{flex:1}]}
            >
              <Text style={styles.text}>Vermelho</Text>
            </View>

            <View
              style={[styles.card, { backgroundColor: "teal" }, { height: 60 }]}
            >
              <Text style={styles.text}>Teal</Text>
            </View>

            <View
              style={[styles.card,{ backgroundColor: "purple" },{ height: 60 }]}
            >
              <Text style={styles.text}>Roxo</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    gap: 8,
    padding: 8,
  },

  conteudo: {
    flex: 1,
    padding: 8,
    gap: 10,
  },

  linhaCards: {
    flexDirection: "row",
    gap: 8,
  },

  linhaPainel: {
    flexDirection: "column",
    gap: 8,
  },

  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 400,
    // width:"90%",
    gap:8
    
  },

  greenBox: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 660,
  },
  blueBox: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },

//   linha: {
//     flex: 1,
//     flexDirection: "row",
//     gap: 8,
//     justifyContent: "center",
//     width: "100%",
//   },

  yellowBox1: {
    flex: 1,
    height: 80,
    // width: 80,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,

    gap: 8,
  },

  blueBox1: {
    flex: 3,
    height: 80,
    // width: 80,
    backgroundColor: "#043a74",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 5,
  },

  pinkBox: {
    flex: 2,
    height: 100,
    backgroundColor: "#fa0047",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    gap: 8,
    flexDirection: "row",
  },

  orangeBox: {
    flex: 2,
    height: 100,
    backgroundColor: "#ff6a00",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    gap: 8,
    flexDirection: "row",
  },

  painelPrincipal: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  text: {
    color: "white",
    fontWeight: "bold",
  },
});
