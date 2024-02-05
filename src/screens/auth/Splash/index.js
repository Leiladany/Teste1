import React from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';

const Splash = ({navigation}) => {
  console.log('navigation :>> ', navigation);
  const onSignup = () => {
    navigation.navigate('Signup');
  };

  const onSignin = () => {
    navigation.navigate('Signin');
  };
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
      <View style={styles.buttonContainer}>
        <Button onPress={onSignup} title={'Sign Up'} />
      </View>
      <Pressable onPress={onSignin} hitSlop={20}>
        <Text style={styles.footerText}> Sign In</Text>
      </Pressable>
    </View>
  );
};

export default React.memo(Splash);
