import { StyleSheet, Text } from "react-native"


const Titulo = ( {children , tamanho, corFundo} )=>{

    // let {titulo, tamanho} = p
    // console.log(p)

    st = styles.t1
    if (tamanho == 'medio'){
        st = styles.t2
    }else if (tamanho == 'pequeno'){
        st = styles.t3
    }
    const cor = {backgroundColor: corFundo}
    // console.log(corFundo, cor)

    return (
        <Text style={[st , styles.cor, cor ]} >
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    t1:{
        fontSize: 40,
        padding: 20,
    },
    t2:{
        fontSize: 22,
        padding: 10,
    },
    t3:{
        fontSize: 14,
        padding: 5,
    },
    cor:{
        // backgroundColor: '#bbb',
        width: '100%',
        textAlign: 'center',
    }
})

export default Titulo