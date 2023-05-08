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

const backToHome = () => {
  console.log('back to home');
};
const AddExpenseScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: 1000,
          width: '100%',
          marginTop: 100,
          backgroundColor: '#fff',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}>
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
                width: 35,
                height: 35,
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
            }}>
            Add expense
          </Text>
        </View>
        <View style={{flexDirection: 'row', padding: 30}}>
          <View
            style={{
              borderRadius: 10,
              height: 50,
              width: 80,
              backgroundColor: colors.background,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: colors.white,
                fontSize: 25,
                fontWeight: '600',
                alignSelf: 'center',
              }}>
              Rs
            </Text>
          </View>
          <TextInput
            placeholder="amount spent"
            keyboardType="numeric"
            style={{
              fontSize: 30,
              marginLeft: 10,
              borderBottomWidth: 2,
              padding: 10,
            }}></TextInput>
        </View>
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
  backButton: {
    width: 35,
    height: 35,
    marginLeft: 10,
    alignSelf: 'center',
  },
});

export default AddExpenseScreen;
