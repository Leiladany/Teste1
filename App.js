import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import Splash from './src/screens/auth/Splash';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <SafeAreaView>
      <Splash />
    </SafeAreaView>
  );
}

export default App;
