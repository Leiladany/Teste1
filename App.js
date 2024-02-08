import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './Routes';
export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState();

  return (
    <SafeAreaProvider>
      <UserContext.Provider value={{user, setUser}}>
        <Routes />
      </UserContext.Provider>
    </SafeAreaProvider>
  );
}

export default App;
