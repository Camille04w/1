import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';


let charset = "abcdefghijklmnopqrstuvwxyz!#$&%0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export default function App() {
  const [senhaGerada, setSenhaGerada] = useState("")

  function gerarSenha() {
    let senha = "";

    for (let i = 0, n = charset.length; i < 10; i++) {
      senha += charset.charAt(Math.floor(Math.random() * n))
    }
    setSenhaGerada(senha)

  }

  return (
    <View style={styles.container}>
      <Image
        source={require("./src/img/logolock.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>LockGen</Text>
      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
        <Text style={styles.textButton}>Gerar senha</Text>
      </TouchableOpacity>
      <Text style={styles.genText}>Senha Gerada: {senhaGerada}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,

  },
  button: {
    backgroundColor: "#333",
    width: '70%',
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom:20
  },
  textButton: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,

  },
  genText:{
    fontSize:16,
    fontWeight:"bold",
    color:"#333",

  }

});
