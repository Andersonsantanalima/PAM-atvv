import { ImageBackground, Text } from "react-native";
import { StyleSheet} from 'react-native';


const CardTenis = ({imagem,modelo,valor})=>{
    return(
        <ImageBackground
            style={estilo.produto}
            source={imagem}
            borderRadius={10}
            resizeMode="cover"

        >
            <Text style={estilo.produto_titulo}>{modelo}</Text>
            <Text style={estilo.produto_preco}>{valor}</Text>
        </ImageBackground>
    );
}


const estilo = StyleSheet.create({
    produto:{
        width: 382,
        margin: 100,
        height: 800,
        backgroundColor: '#ddd',
        borderRadius: 10,
        justifyContent: "space-between",
        marginVertical: 20
               
    },
    produto_titulo:{
        fontSize: 18,
        padding:5,       
        backgroundColor:"#040404c4",
        color: "#FFF",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    produto_preco:{
        fontSize: 18,
        marginTop:10,
        padding:5,       
        backgroundColor:"#040404c4",
        color: "#FFF",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        textAlign: "center"
    },
    
  });
  
  export default CardTenis;