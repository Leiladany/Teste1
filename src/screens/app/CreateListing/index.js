import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import {launchImageLibrary} from 'react-native-image-picker';

const CreateListing = ({navigation}) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const goBack = () => {
    navigation.goBack();
  };

  const uploadNewImage = async () => {
    setLoading(true);
    const result = await launchImageLibrary();

    if (result?.assets?.length) {
      setImages(list => [...list, ...result?.assets]);
      setLoading(false);
    }
  };
  const onDeleteImage = image => {
    setImages(list => {
      const filteredImages = list.filter(
        img => img?.fileName !== image?.fileName,
      );
      return filteredImages;
    });
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
            disabled={loading}
            style={styles.uploadContainer}
            onPress={uploadNewImage}>
            <View style={styles.uploadCircle}>
              <Text style={styles.uploadPlus}>+</Text>
            </View>
          </TouchableOpacity>

          {images?.map(image => (
            <View style={styles.imageCont} key={image?.fileName}>
              <Image style={styles.image} source={{uri: image?.uri}} />
              <Pressable hitSlop={20} onPress={() => onDeleteImage(image)}>
                <Image
                  style={styles.delete}
                  source={require('../../../assets/close.png')}
                />
              </Pressable>
            </View>
          ))}
          {loading ? <ActivityIndicator /> : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(CreateListing);