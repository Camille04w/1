import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import * as Clipboard from 'expo-clipboard'
import Toast from 'react-native-toast-message'

export function ModalPassword({ senha, fecharModal, salvarSenha }) {

    function copyToClipboard(){
        Clipboard.setStringAsync(senha);
        Toast.show({
            type:"success",
            text1:"Senha copiada!",
            text2:"A senha foi copiada para a área de transferência ! "
        });

    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Senha Gerada
                </Text>
                <Pressable style={styles.innerPassword} onPress={copyToClipboard}>
                    <Text style={styles.text}>{senha}</Text>
                </Pressable>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={fecharModal}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSave} onPress={salvarSenha}>
                        <Text style={styles.buttonTextSave}>Salvar senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Toast />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(24,24,24,0.6)"
    },
    content: {
        backgroundColor: "#ffffc5",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#000",
        paddingBottom: 18
    },
    innerPassword: {
        backgroundColor: "#FFF",
        width: "90%",
        padding: 14,
        borderRadius: 8,
    },
    text: {
        textAlign: "center",
        fontWeight: "bold",
    },
    buttonArea: {
        flexDirection: 'row',
        width: "90%",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 14,
    },
    button: {
        flex: 1,
        alignItems: "center",
        padding: 8


    },
    buttonSave: {
        flex: 1,
        alignItems: "center",
        padding: 8,
        backgroundColor: "#ffff00",
        borderRadius: 8
    },
    buttonTextSave: {
        color: "#000"
    }
})