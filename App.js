import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <SafeAreaView>
      <Signin />
    </SafeAreaView>
  );
}

export default App;
