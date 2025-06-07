import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View,ImageBackground  } from 'react-native';
import Jogos from './componentes/Jogos';

const jogos = [
  {id:"1",nome:"Monster hunter wilds",plataforma:"pc" ,preco:" 279,00"},
  {id:"2",nome:"Just cause 3",plataforma:"pc" ,preco:" 42,99"},
  {id:"3",nome:"Elden Ring",plataforma:"pc" ,preco:" 274,50"},
  {id:"4",nome:"The Binding of Isaac: Rebirth",plataforma:"pc" ,preco:" 27,99"},
  {id:"5",nome:"Dark Souls III",plataforma:"pc" ,preco:" 229,90"},
  {id:"6",nome:"NARUTO SHIPPUDEN: Ultimate Ninja STORM 4",plataforma:"pc" ,preco:" 75,50"},
  {id:"7",nome:"9 kings",plataforma:"pc" ,preco:" 39,99"},
  {id:"8",nome:"Batman™: Arkham VR",plataforma:"pc" ,preco:" 89,90"},
  {id:"9",nome:"Monster hunter World",plataforma:"pc" ,preco:" 99,00"},
  {id:"10",nome:"No Man's sky",plataforma:"pc" ,preco:" 162,00"},
  {id:"11",nome:"Dune:Awakening",plataforma:"pc" ,preco:" 179,00"},
  {id:"12",nome:"Lies of P",plataforma:"pc" ,preco:" 124,95"},
 
  
]

export default function App() {
  return (
    <ImageBackground
     source={require('./assets/imgs/background.jpg')}
      style={styles.imgFundo}
      imageStyle={styles.opacityImage}>

     

      <View style={styles.container}>
      <Text style={styles.titulo}>Catálogo de jogos</Text>
        <View style={styles.lista}>
          <FlatList
          data={jogos}
          keyExtractor={item=>item.id}
          renderItem={({item}) => <Jogos plataforma={item.plataforma} nome={item.nome} preco={item.preco} />}
          />
        </View>
      </View>
    </ImageBackground>
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

  },

  imgFundo: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    
  },
  opacityImage:{
     opacity: 0.2,
    }
});
