import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import {launchImageLibrary} from 'react-native-image-picker';

const CreateListing = ({navigation}) => {
  const [images, setImages] = useState([]);

  const goBack = () => {
    navigation.goBack();
  };

  const uploadNewImage = async () => {
    const result = await launchImageLibrary();

    if (result?.assets?.length) {
      setImages(list => [...list, ...result?.assets]);
    }
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
        <View style={styles.imageRow}>
          <TouchableOpacity
            style={styles.uploadContainer}
            onPress={uploadNewImage}>
            <View style={styles.uploadCircle}>
              <Text style={styles.uploadPlus}>+</Text>
            </View>
          </TouchableOpacity>

          {images?.map(image => (
            <Image
              key={image?.fileName}
              style={styles.image}
              source={{uri: image?.uri}}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(CreateListing);
