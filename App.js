import React, {useState} from 'react';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './src/screens/auth/Splash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from './src/utils/colors';

const Stack = createNativeStackNavigator();

function App() {
  const theme = {
    colors: {
      background: colors.white,
    },
  };

  return (
    <>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}}/>
          <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
