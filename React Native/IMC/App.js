import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './src/components/base/titulo/Titulo';
import Campo from './src/components/base/campo/Campo';

export default function App() {
  return (
    <View style={styles.container}>
        <Titulo tamanho="grande" corFundo="#ddd">
          IMC
        </Titulo>
        <Titulo tamanho="medio" corFundo="#bbb">
          O seu app
        </Titulo>
        <View style={styles.body}>
          <Campo mensagem='Informe o nome: '>Nome</Campo>
          <Campo keyboard='numeric'>Peso</Campo>
          <Campo keyboard='numeric'>Altura</Campo>
        </View>
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
  body: {
    backgroundColor: 'yellow',
    flexGrow: 1,
    width: "100%",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

