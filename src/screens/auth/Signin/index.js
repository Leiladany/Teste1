import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import {styles} from './styles';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signin = ({navigation}) => {
  const onSignUp = () => {
    navigation.navigate('Signup');
  };

  const onBack = () => {
    if (navigation && navigation.goBack) {
      navigation.goBack();
    } else {
      console.warn('Navigation or goBack function is undefined.');
    }
  };
  return (
    <ScrollView style={styles.container}>
      <AuthHeader onBackPress={onBack} title="Sign In" />
      <Input label="Email" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="********" />

      <Button style={styles.button} title="Sign In" />
      <Seperator text="Or sign in with" />
      <GoogleLogin />
      <Text style={styles.footerText}>
        Dont't have an account?
        <Text onPress={onSignUp} style={styles.footerLink}>
          Sign Up
        </Text>
      </Text>
    </ScrollView>
  );
};

export default React.memo(Signin);
