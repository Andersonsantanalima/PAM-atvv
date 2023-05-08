import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';

import Comedia from  './components/Comedia';
import Terror from './components/Terror';
import Acao from './components/Acao';

const Nav = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Nav.Navigator>
      <Nav.Screen name='Terror' component={Terror}/>
      <Nav.Screen name='Comedia' component={Comedia}/>
      <Nav.Screen name='Ação' component={Acao}/>
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
