import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';
import values from '../../../constants/values';

const addNew = () => {
  console.log('add added');
};

const TopHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: 'https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk'}}
      />
      <View style={{marginLeft: 10}}>
        <Text style={values.pWhiteStyle}>Welcome!</Text>
        <Text style={[values.h2Style, {color: colors.white}]}>Vivek Garg</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={addNew}>
        <Image
          style={{
            width: 40,
            height: 40,
          }}
          source={require('../../../../assets/images/plus.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  addButton: {
    height: 40,
    width: 40,
    position: 'absolute',
    right: 0,
  },
});

export default TopHeader;