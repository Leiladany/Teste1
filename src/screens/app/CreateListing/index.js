import React from 'react';
import {ScrollView, Text} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';

const CreateListing = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <Header
        showBack={true}
        onBackPress={goBack}
        title="Create a new listing"
      />
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Upload Photos</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(CreateListing);
