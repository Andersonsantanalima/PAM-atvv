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
          <Text style={styles.texto}> Adidas Coreracer Masculino</Text>    
            <Text style={styles.texto}> R$ 179,99</Text>
           </ImageBackground>

           <ImageBackground
            source={Add2}
         style={styles.imagems}
           >
          <Text style={styles.texto}> Adidas Breaknet Masculino</Text>    
            <Text style={styles.texto}>R$ 208,99</Text>
           </ImageBackground>

           <ImageBackground
              source={Add3}
              style={styles.imagems}
           >
            <Text style={styles.texto}>Adidas Lite Racer Rebold 1</Text>    
            <Text style={styles.texto}>R$ 379,99</Text>
           </ImageBackground>

           <ImageBackground
            source={Add4}
         style={styles.imagems}
           >
          <Text style={styles.texto}>Adidas Lite Racer Rebold 2</Text>    
            <Text style={styles.texto}> R$ 329,05</Text>
           </ImageBackground>

           <ImageBackground
            source={Add5}
         style={styles.imagems}
           >
          <Text style={styles.texto}> Adidas Lite Racer Rebold 3</Text>    
            <Text style={styles.texto}>R$ 218,49</Text>
           </ImageBackground>
        </ScrollView>

    );}
