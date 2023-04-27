import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';

import Navigation from './src/Navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { useFonts } from 'expo-font';




export default function App() {

  let[loaded]=useFonts({
    'Sono': require('./assets/fonts/Sono/Sono-Regular.ttf'),
    'Caveat': require('./assets/fonts/static/Caveat-Regular.ttf'),
    'LilitaOne': require('./assets/fonts/LilitaOne-Regular.ttf'),
    'StickNoBills': require('./assets/fonts/StickNoBills-Regular.ttf'),
  })
  if(!loaded){
    return null
  }



  return (
    <Provider store={store}>
  
      <Navigation/>
      <StatusBar style="auto" />
    
    </Provider>
  );
}




