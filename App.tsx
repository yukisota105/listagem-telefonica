import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View } from 'react-native';
import Contatos from './componentes/Contatos';

const contatos = [
  {id:"1",nome:"Augusto",tel:"(13) 99859-9874"},
  {id:"2",nome:"maria",tel:"(13) 99859-9874"},
  {id:"3",nome:"lola",tel:"(13) 99859-9874"},
  {id:"4",nome:"gabriel",tel:"(13) 99859-9874"},
  {id:"5",nome:"Eduardo",tel:"(13) 99859-9874"},
  {id:"6",nome:"André",tel:"(13) 99859-9874"},
  {id:"7",nome:"Xablau",tel:"(13) 99859-9874"},
  {id:"8",nome:"Augusto",tel:"(13) 99859-9874"}
]

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de contatos</Text>
        <View style={styles.lista}>
          <FlatList
          data={contatos}
          keyExtractor={item=>item.id}
          renderItem={({item}) => <Contatos tel={item.tel} nome={item.nome}/>}
          />
        </View>
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

  lista:{
    height:500,
    width:'90%',
    marginLeft:'10%'
  },

  titulo:{
    fontSize:30,
    fontWeight:'bold',

  }
});
