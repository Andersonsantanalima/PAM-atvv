import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import CardTenis from './CardTenis';

export default function Comedia() {
  const produtos = [
    {
      id:"1",
      imagem: require("../assets/minha.jpg"),
      modelo: "Minha Mãe É uma Peça",
      valor: "Dona Hermínia é uma mulher de meia idade, divorciada do marido, que a trocou por uma mais jovem. Hiperativa, ela não larga o pé de seus filhos Marcelina e Juliano, que já estão bem grandinhos. Um dia, após descobrir que eles a consideram uma chata, resolve sair de casa sem avisar ninguém, deixando todos, de alguma forma, preocupados com o que teria acontecido. Mal sabem eles que a mãe foi visitar a querida tia Zélia para desabafar suas tristezas do presente e recordar os bons tempos do passado.",
    },
    {
      id:"2",
      imagem: require("../assets/vovo.jpg"),
      modelo: "Vovó... Zona",
      valor:  "Agente durão do FBI chega ao extremo para ficar na pista de um ladrão violento que fugiu da prisão. Enquanto se disfarça de avó obesa com uma língua afiada, ele é forçado a usar todas as suas habilidades, desde cozinhar a cuidar de crianças.",
    },
    {
      id:"3",
      imagem: require("../assets/bran.jpg"),
      modelo: "As Branquelas ",
      valor:  "Dois irmãos agentes do FBI, Marcus e Kevin Copeland, acidentalmente evitam que bandidos sejam presos em uma apreensão de drogas. Como castigo, eles são forçados a escoltar um par de socialites nos Hamptons. Quando as meninas descobrem o plano da agência, elas se recusam a ir. Sem opções, Marcus e Kevin, dois homens negros, decidem fingir que são as irmãs e se transformam em um par de loiras.",
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
