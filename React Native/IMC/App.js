import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './src/components/base/titulo/Titulo';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Titulo titulo="IMC" tamanho="grande" />
      <Titulo titulo="o seu App" tamanho="medio" />
      <Titulo titulo="blá" tamanho="pequeno" />
      <Titulo titulo="blá blá" tamanho="50" />
      
      <StatusBar style="auto" />
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
});

