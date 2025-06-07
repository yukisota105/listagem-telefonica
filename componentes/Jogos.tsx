import { View,StyleSheet,Text } from "react-native"

interface propsJogos{
    nome:string,
    plataforma:string,
    preco:string
}

export default function Jogos({nome, plataforma,preco}:propsJogos){
    return(
        <View style={styles.cartao}>
            <Text style={styles.nome}>
                Nome:{nome}
            </Text>
            <Text style={styles.plataforma}>
                plataforma:{plataforma}
            </Text>
            <Text style={styles.preco}>
                plataforma:{preco}
            </Text>
        </View>
        
    )
}


    const styles = StyleSheet.create({
        cartao:{
            backgroundColor:"#40cd97",
            padding:8,
            marginVertical:10,
            borderRadius:8,
            width:'90%'
        },

        nome:{
            fontSize:26,
            fontWeight:'bold'
        },

        plataforma:{
           fontSize:20,
           color:'#333'
        },

         preco:{
            fontSize:26,
            fontWeight:'bold'
        }



    });
