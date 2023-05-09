import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from 'react-native';
import values from '../../constants/values';
import colors from '../../constants/colors';

const AddExpenseScreen = ({navigation}) => {
  const backToHome = () => {
    console.log('back to home');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.whiteContainer}>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.backButton} onPress={backToHome}>
            <Image
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
              source={require('../../../assets/images/close.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              alignSelf: 'center',
              marginLeft: 30,
              fontSize: 25,
              fontWeight: '700',
              fontFamily: 'Trebuchet MS',
            }}>
            Add expense
          </Text>
        </View>
        <View style={{flexDirection: 'row', padding: 30}}>
          <View style={[styles.imageContainer, {backgroundColor: '#3dccc4'}]}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/expense.png')}
            />
          </View>
          <TextInput
            placeholder="amount spent"
            keyboardType="numeric"
            style={{
              fontSize: 30,
              marginLeft: 10,
              borderBottomWidth: 2,
              padding: 10,
              fontFamily: 'Trebuchet MS',
            }}></TextInput>
        </View>
        <View style={{flexDirection: 'row', padding: 30}}>
          <View style={[styles.imageContainer, {backgroundColor: '#3dccc4'}]}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/taxi.png')}
            />
          </View>
          <TextInput
            placeholder="category"
            style={{
              fontSize: 30,
              marginLeft: 10,
              borderBottomWidth: 2,
              padding: 10,
              fontFamily: 'Trebuchet MS',
            }}></TextInput>
        </View>
        <View style={{flexDirection: 'row', padding: 30}}>
          <View style={[styles.imageContainer, {backgroundColor: '#3dccc4'}]}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/notes.png')}
            />
          </View>
          <TextInput
            placeholder="notes"
            style={{
              fontSize: 30,
              marginLeft: 10,
              borderBottomWidth: 2,
              padding: 10,
              fontFamily: 'Trebuchet MS',
            }}></TextInput>
        </View>
        <TouchableOpacity
          style={{
            width: 150,
            height: 60,
            backgroundColor: colors.background,
            borderRadius: 15,
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 50,
          }}>
          <Text
            style={{
              color: colors.white,
              fontSize: 25,
              alignSelf: 'center',
              fontWeight: '600',
              fontFamily: 'Trebuchet MS',
            }}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: values.verticalPadding + 40,
    backgroundColor: colors.background,
  },
  whiteContainer: {
    height: 1000,
    width: '100%',
    marginTop: 75,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  backButton: {
    width: 40,
    height: 40,
    marginLeft: 10,
    alignSelf: 'center',
    padding: 5,
  },
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

export default AddExpenseScreen;
