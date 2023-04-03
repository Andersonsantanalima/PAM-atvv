import {StyleSheet,  ImageBackground,ScrollView, Text} from 'react-native';
import styles from './Style';

import Add1 from "../assets/Tenis/Adidas/9.png";
import Add2 from "../assets/Tenis/Adidas/10.png";
import Add3 from "../assets/Tenis/Adidas/7.png";
import Add4 from "../assets/Tenis/Adidas/6.png";
import Add5 from "../assets/Tenis/Adidas/8.png";

export default function Adidas () {
    return (
        <ScrollView>
           <ImageBackground
            source={Add1}
         style={styles.imagems}
           >
          <Text> Adidas Coreracer Masculino</Text>    
            <Text> R$ 179,99</Text>
           </ImageBackground>
        </ScrollView>

    );}
