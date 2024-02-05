import React from 'react';
import {ScrollView, Text} from 'react-native';
import {styles} from '../Home/styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const ProductDetails = ({route}) => {
  const {product} = route?.params || {};
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text>{product?.title}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(ProductDetails);
