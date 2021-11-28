import 'react-native-gesture-handler';
import React  from 'react';
// import styled from 'styled-components/native';
// import { Text, Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import MainStack from './src/navigators/MainStack';

import Root  from '../../../app/index2';

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Home';
import Documentos from './documentUteis/Documentos';
import Noticias from './noticias/noticias';
import menuDrawer from './components/menuDrawer';
import DiarioOficial from './diarioOficial/diarioOficial';


const Drawer = createDrawerNavigator();

export default function App() {
  return (

  <NavigationContainer >
    <Drawer.Navigator 
    drawerContent={menuDrawer}
    >
    
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Chat" component={Root} />
      <Drawer.Screen name="Documentos Úteis" component={Documentos} />
      <Drawer.Screen  name="Noticias" component={Noticias} />
      <Drawer.Screen  name="Diario Oficial" component={DiarioOficial} />
      
      
      
    </Drawer.Navigator>
  </NavigationContainer>
  )
}