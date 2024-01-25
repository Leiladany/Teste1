import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Chair from './Chair';
import Table from './Table';

function App() {
  return (
    <SafeAreaView>
      <View>
        {/* Chair */}
        <Chair />

        {/* Table */}
        <Table />
      </View>
    </SafeAreaView>
  );
}

export default App;
