import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

const Chair = (props) => {
  const {theme} = props; //object destructuring = props.theme = {theme} = props
  const [isBig, setIsBig] = useState(false);

  useEffect(() => {
    console.log('inside useEffect');

    return () => {};
  }, [isBig]);

  console.log('object :>>', isBig);

  const changeState = () => {
    setIsBig(currentSate => !currentSate);
  };

  return (
    <Text
      style={{
        fontSize: isBig ? 24 : 14,
        color: theme === 'dark' ? 'grey' : 'purple',
      }}
      onPress={changeState}>
      This is chair
    </Text>
  );
};

export default Chair; /*{Chair} => name export*/
