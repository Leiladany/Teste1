import React from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.images}
        source={require('../../../assets/splash.png')}
      />

      <View style={styles.titleContainer} />
      <Text style={styles.title}> You'll find</Text>
      <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
      <Text style={styles.title}>Here!</Text>

      <Button title={'Sign Up'} />

      <Pressable hitSlop={20}>
        <Text style={styles.footerText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
