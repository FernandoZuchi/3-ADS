import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Titulo from './src/components/base/Titulo/Titulo';
import Campo from './src/components/base/Campo/Campo';
import { useState } from 'react';
import Pessoa from './src/model/Pessoa';

export default function App() {

  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const calcula = () => {
    // let imc = parseFloat((peso) / (parseFloat(altura) * parseFloat(altura)))
    // console.log('ok', nome, peso, altura);
    // alert('o imc é' + imc);
    let pessoa = new Pessoa(nome, peso, altura);
    alert('Nome:' + pessoa.nome + '\n imc: ' + pessoa.imc() + '\n Faixa de peso: ' + pessoa.faixa())
  }

  return (
    <View style={styles.container}>
      
      <Titulo tamanho="grande" corFundo="#bbb" >
        IMC
        </Titulo>
      <Titulo tamanho="medio" corFundo="#ddd" >
      o seu App
        </Titulo>
      {/* <Titulo tamanho="pequeno" >
        blá
        </Titulo>
      <Titulo tamanho="50" >
        blá
        </Titulo> */}

        <View style={styles.body}>
          
          <Campo mensagem='informe o nome'  >            
            <Titulo tamanho='medio' onChange={setNome}>Nome</Titulo>
          </Campo>
          <Campo keyboard='numeric' valor='0' onChange={setPeso}>Peso</Campo>
          <Campo keyboard='numeric' valor='0' onChange={setAltura}>Altura
          </Campo>


        </View>

        <TouchableOpacity style={styles.btn} onPress={calcula}>
          <Text style={styles.btnText}>Calcular</Text>
        </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  btn: {
    padding: 15,
    backgroundColor: '#ccc',
    width: '100%'
  },
  btnText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold'
  },
  body:{
    backgroundColor: '#bfb',
    flexGrow: 1,
    width:'99%',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
