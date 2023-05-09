import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import values from '../../constants/values';
import colors from '../../constants/colors';

const TransactionDetailScreen = ({route, navigation}) => {
  const transaction = route.params.transaction;
  console.log('==>', transaction);
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
            paddingLeft: 10,
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.backButton} onPress={backToHome}>
            <Image
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
              source={require('../../../assets/images/back.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              alignSelf: 'center',
              marginLeft: 20,
              fontSize: 25,
              fontWeight: '700',
              fontFamily: 'Trebuchet MS',
            }}>
            Transaction Detail
          </Text>
        </View>
        <View style={{flexDirection: 'row', padding: 20}}>
          <View
            style={[
              styles.imageContainer,
              {backgroundColor: transaction.backgroundColor, opacity: 0.5},
            ]}>
            <Image style={styles.image} source={transaction.img} />
          </View>
          <View
            style={{
              marginLeft: 20,
              alignSelf: 'flex-end',
              flex: 1,
            }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '600',
                alignSelf: 'flex-end',
                fontFamily: 'Trebuchet MS',
                backgroundColor: '#000',
                color: '#fff',
                paddingHorizontal: 10,
              }}>
              Amount
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '600',
                alignSelf: 'flex-end',
                fontFamily: 'Trebuchet MS',
              }}>
              {transaction.price}
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '600',
            padding: 20,
            fontFamily: 'Trebuchet MS',
          }}>
          Notes
        </Text>
        <Text
          style={{
            fontSize: 20,
            paddingHorizontal: 20,
            minHeight: 200,
            fontFamily: 'Trebuchet MS',
          }}>
          Lorem ipsum dolor sit amet. Aut consequuntur voluptatem qui dolore
          adipisci sit unde sapiente ut natus quis sit ipsum consequatur. Aut
          nemo similique eos illum provident hic quis tempora 33 maxime
          consequatur.
        </Text>
        <View style={{flex: 1, padding: 20}}>
          <Text
            style={{
              fontSize: 20,
              alignSelf: 'flex-end',
              fontWeight: '500',
              fontFamily: 'Trebuchet MS',
            }}>
            {transaction.date}
          </Text>
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
    width: 100,
    height: 100,
  },
  imageContainer: {
    height: 175,
    width: 175,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default TransactionDetailScreen;
