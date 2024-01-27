import React from 'react';
import {Text, Image, View} from 'react-native';
import {styles} from './styles';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.images}
        source={require('../../../assets/splash.png')}
      />
      <Text style={styles.title}> You'll find</Text>
      <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
      <Text style={styles.title}>Here!</Text>
    </View>
  );
};

export default Splash;
