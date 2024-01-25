import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

const Chair = () => {
  const [isBig, setIsBig] = useState(false);

  useEffect(() => {

  }, [])

  console.log('object :>>', isBig);

  const changeState = () => {
    setIsBig(currentSate => !currentSate);
  };

  return (
    <Text style={{fontSize: isBig ? 24 : 14}} onPress={changeState}>
      This is chair
    </Text>
  );
};

export default Chair; /*{Chair} => name export*/
