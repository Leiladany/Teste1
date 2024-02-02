import React from 'react';
import {Image, Text, View, Pressable} from 'react-native';
import {styles} from './styles';

const CategoryBox = ({title, image, onPress, isFirst}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, isFirst ? styles.containerFirst : {}]}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default React.memo(CategoryBox);
