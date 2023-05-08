import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import CardTenis from './CardTenis';

export default function Acao() {
  const produtos = [
    {
      id:"1",
      imagem: require("../assets/bad.jpg"),
      modelo: "Os Bad Boys",
      valor: "Em Miami, os detetives Mike Lowrey e Marcus Burnett trocam de identidade enquanto investigam assassinatos ligados ao roubo de uma carga de 100 milhões de dólares em heroína, que recentemente confiscaram.",
    },
    {
      id:"2",
      imagem: require("../assets/jumanji.jpg"),
      modelo: "Mizuno Cometa 2",
      valor:  "Spencer volta ao mundo fantástico de Jumanji. Os amigos Martha, Fridge e Bethany entram no jogo e tentam trazê-lo para casa. A turma descobre ainda mais obstáculos e perigos a serem superados.",
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
