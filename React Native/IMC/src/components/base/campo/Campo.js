import { View, Text, StyleSheet, TextInput } from "react-native";
import Titulo from "../titulo/Titulo";

export default Campo = ({children, keyboard, mensagem}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{children}</Text>
            <TextInput 
                style={styles.campo} 
                keyboardType={keyboard}
                placeholder={mensagem}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ddd",
        alignItems: 'flex-start',
        padding: 15,
        width: '98%',
        backgroundColor: '#ddd',
    },
    campo: {
        fontSize: 22,
        padding: 5,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
    },
    texto: {
        fontSize: 20
    }
})