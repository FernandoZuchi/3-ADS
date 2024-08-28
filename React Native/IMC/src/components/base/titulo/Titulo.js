import { StyleSheet, Text } from "react-native"


const Titulo = ( {titulo, tamanho} )=>{

    // let {titulo, tamanho} = p

    // console.log(p)

    st = styles.t1
    if (tamanho == 'medio'){
        st = styles.t2
    }else if (tamanho == 'pequeno'){
        st = styles.t3
    }

    return (
        <Text style={st} >
            {titulo}
        </Text>
    )
}

const styles = StyleSheet.create({
    t1:{
        fontSize: 40,
    },
    t2:{
        fontSize: 22,
    },
    t3:{
        fontSize: 14,
    },
})

export default Titulo
