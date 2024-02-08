import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './Routes';

export const UserContext = React.createContext();
export const ProfileContext = React.createContext();

function App() {
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();

  return (
    <SafeAreaProvider>
      <UserContext.Provider value={{user, setUser}}>
        <ProfileContext.Provider value={{profile, setProfile}}>
          <Routes />
        </ProfileContext.Provider>
      </UserContext.Provider>
    </SafeAreaProvider>
  );
}

export default App;
