import { StyleSheet, Text, TextInput, View } from "react-native"
import { useState } from "react"



export default Campo = ({children, keyboard, mensagem, valor = '', onChange})=>{

const [value, setValue] = useState(valor);

const mudaValue = (f) => {
    setValue(f);
    onChange(f);
}

return (
    <View style={styles.container}>
        <Text style={styles.texto}> {children} </Text>
        {/* <Titulo tamanho='pequeno'>{children}</Titulo> */}
        <TextInput style={styles.campo}
        keyboardType={keyboard}
        value={valor}
        onTextInput={mudaValue}
        placeholder={mensagem}
        />
    </View>
)

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent:'flex-start',
        padding: 15,
        width:'98%',
        // backgroundColor:'#ddd',
        alignSelf:'flex-start',
    },
    campo:{
        fontSize: 22,
        padding: 8,
        backgroundColor: '#fff',
        width:'98%',
        borderColor: '#000',
        borderWidth:1,
    },
    texto:{
        fontSize: 20,
    },
    body: {
        backgroundColor: '#bfb',
        flexGrow: 1,
        width: '99%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }

})