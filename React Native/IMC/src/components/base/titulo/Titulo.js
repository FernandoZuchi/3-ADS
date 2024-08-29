import { StyleSheet, Text } from "react-native"


const Titulo = ( {children, tamanho, corFundo} )=>{

    // let {titulo, tamanho} = p

    // console.log(p)

    st = styles.t1
    if (tamanho == 'medio'){
        st = styles.t2
    }else if (tamanho == 'pequeno'){
        st = styles.t3
    }

    if(corFundo == '#ddd')
    {
        c1 = styles.c1;
    }
    else if(corFundo == '#bbb')
    {
        c1 = styles.c2
    }


    return (
        <Text style={[st, c1]}> 
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
    c1: {
        backgroundColor: "#bbb",
        width: "100%",
        textAlign: 'center',
    },
    c2: {
        backgroundColor: "#777",
        width: "100%",
        textAlign: 'center',
    },
    c: {
        backgroundColor: "#fff",
        width: "100%",
        textAlign: 'center',
    }
})

export default Titulo
