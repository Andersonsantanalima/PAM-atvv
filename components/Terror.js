
import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import CardTenis from './CardTenis';

export default function Terror() {
  const produtos = [
    {
      id:"1",
      imagem: require("../assets/download.jpg"),
      modelo: "PANICO 6",
      valor: "Sam, Tara, Chad e Mindy, os quatro sobreviventes do massacre realizado pelo Ghostface, decidem deixar Woodsboro para trás em busca de um novo começo em Nova York. Mas não demora muito para eles se tornarem alvo de um novo serial killer.",
    },
    {
      id:"2",
      imagem: require("../assets/AM.jpg"),
      modelo: "A Morte do Demônio: A Ascensão ",
      valor:  "Uma mulher se encontra em uma luta por sua vida quando um livro antigo dá à luz demônios sedentos por sangue. Eles se tornam cada vez mais agressivos em um prédio em Los Angeles.",
    },
    {
      id:"3",
      imagem: require("../assets/MS(1).jpg"),
      modelo: "O Massacre da Serra Elétrica 2   ",
      valor:  "No caminho para visitar o túmulo de seu avô, cinco jovens se perdem e mergulham em um pesadelo sem fim quando conhecem uma família de canibais. Os psicopatas atacam os forasteiros utilizando uma variedade de métodos brutais e sádicos.",
    },
    

  ];
 
  return (
    
    <ScrollView>
      <View style={estilo.container2}>
        <FlatList
          data={produtos}
          renderItem={({item})=>
            <CardTenis 
                imagem={item.imagem}
                modelo={item.modelo}
                valor={item.valor}
            />
          }
          keyExtractor={item => item.id}
        />        
      </View>
    </ScrollView>
  );
}
