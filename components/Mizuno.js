import {  Text, StyleSheet ,ImageBackground,ScrollView} from 'react-native';
import miz1 from "../assets/Tenis/Mizuno/11.png";
import miz2 from   "../assets/Tenis/Mizuno/12.png"
import styles from './Style';

export default function Mizuno () {
    return (
        <ScrollView>
            <ImageBackground
            source={miz1}
         style={styles.imagems}
           >
          <Text style={styles.texto}>Mizuno Cometa</Text>    
            <Text style={styles.texto}> R$ 199,40</Text>
           </ImageBackground>

           <ImageBackground
            source={miz2}
         style={styles.imagems}
           >
          <Text style={styles.texto}> Mizuno Cometa</Text>    
            <Text style={styles.texto}> R$ 249,40</Text>
           </ImageBackground>

        </ScrollView>
    );}