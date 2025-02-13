import { StyleSheet, Text, View } from "react-native"



export default OsListView = ()=>{

    return(
        <View style={estilo.container}>

            <Text>LISTAGEM DE OS</Text>

        </View>        
    )

}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})