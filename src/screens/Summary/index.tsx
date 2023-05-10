import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import values from '../../constants/values';
import colors from '../../constants/colors';
import {Entry, entryContext} from '../../realm';
import Transaction from '../HomeScreen/components/transaction';
import {useNavigation} from '@react-navigation/native';

const Summary: React.FC = () => {
  const navigation = useNavigation();
  const {useQuery} = entryContext;
  const transactions = useQuery(Entry);
  const backToHome = () => {
    navigation.goBack();
  };
  const showDetail = item => {
    console.warn(`Clicked ${item.heading}`);
    navigation.navigate('TransactionDetail', {transaction: item});
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
            Summary
          </Text>
        </View>
        <View>
          <FlatList
            style={{padding: 20}}
            data={transactions}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Transaction
                transaction={item}
                onPress={item => showDetail(item)}
              />
            )}
          />
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
export default Summary;
