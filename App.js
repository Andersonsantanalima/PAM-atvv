import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';

const Nav = createDrawerNavigator();

import Adidas from './components/Adidas';
import Nike from './components/Nike';
import Mizuno from './components/Mizuno';

export default function App() {
  return (
    <NavigationContainer>
      <Nav.Navigator>
        <Nav.Screen name='adidas' component={Adidas}/>
        <Nav.Screen name='Nike' component={Nike}/>
        <Nav.Screen name='Mizuno' component={Mizuno}/>
      </Nav.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
