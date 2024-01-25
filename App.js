import React, {useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import Chair from './Chair';
import Table from './Table';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <SafeAreaView>
      <Text style={styles.themeHeader} onPress={() => setTheme('dark')}>
        Make theme dark
      </Text>
      <View>
        {/* Chair */}
        <Chair theme={theme} />

        {/* Table */}
        <Table />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  themeHeader: {margin: 16, fontSize: 16, backgroundColor: 'yellow'},
});

export default App;
