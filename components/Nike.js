import {  Text, StyleSheet ,ImageBackground,ScrollView} from 'react-native';
import styles from './Style';

import nike1 from "../assets/Tenis/nike/1.png";
import nike2 from "../assets/Tenis/nike/2.png";
import nike3 from "../assets/Tenis/nike/3.png";
import nike4 from "../assets/Tenis/nike/4.png";
import nike5 from "../assets/Tenis/nike/5.png";



export default function Nike() {
    return (
        <ScrollView>

<ImageBackground
            source={nike1}
         style={styles.imagems}
           >
          <Text> Nike Air Winflo 9 Rosa</Text>    
            <Text> R$ 341,99</Text>
           </ImageBackground>

           <ImageBackground
            source={nike2}
         style={styles.imagems}
           >
          <Text>Nike Air Winflo 9 Preto</Text>    
            <Text>R$ 484,49</Text>
           </ImageBackground>
           
           <ImageBackground
            source={nike3}
         style={styles.imagems}
           >
          <Text>Nike Renew Ride 3</Text>    
            <Text>R$ 427,49</Text>
           </ImageBackground>

           <ImageBackground
            source={nike4}
         style={styles.imagems}
           >
          <Text>Nike Renew Ride 4</Text>    
            <Text> R$ 417,99</Text>
           </ImageBackground>

           <ImageBackground
            source={nike5}
         style={styles.imagems}
           >
          <Text> Nike Renew Run 3</Text>    
            <Text>R$ 427,49</Text>
           </ImageBackground>


        </ScrollView>

    );}