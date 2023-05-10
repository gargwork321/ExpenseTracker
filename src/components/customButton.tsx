import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

type Props = {
  size: number;
  bgColor: string;
  image: string;
  onPress: any;
};
const CustomButton = ({
  size = 30,
  bgColor = '#CBDFE4',
  image,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.imageContainer(size), {backgroundColor: bgColor}]}>
        <Image style={styles.image(size)} source={image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: (size: number) => ({
    height: size,
    width: size,
    borderRadius: size / 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  }),
  image: (size: number) => ({
    width: (size * 2) / 3,
    height: (size * 2) / 3,
  }),
});

export default CustomButton;
