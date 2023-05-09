import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

type ImageProps = {
  icon: string;
  color: string;
};
const TransactionImage = ({icon, color}: ImageProps) => {
  const path = `../../../assets/images/${icon}.png`;
  //   const source = require(path);
  console.log('==>', path);
  return (
    <View style={[styles.imageContainer, {backgroundColor: color}]}>
      {/* <Image style={styles.image} source={path} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 35,
    height: 35,
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default TransactionImage;
