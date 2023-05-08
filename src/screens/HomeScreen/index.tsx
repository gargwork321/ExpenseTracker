import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../constants/colors';
import TopHeader from './components/topHeader';
import Spacer from './components/spacer';
import Transaction from './components/transaction';
import {transactions, earnings} from '../../constants/data';

const HomeScreen = () => {
  const [isExpenseSelected, setExpenseSelected] = useState<boolean>(false);
  const onTabPressed = () => {
    console.log('tab pressed');
    setExpenseSelected(!isExpenseSelected);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 20}}>
        <TopHeader />
        <Spacer height={50} />
        <Text
          style={{
            fontSize: 30,
            color: colors.white,
            fontWeight: '700',
          }}>
          Balance
        </Text>
        <Text
          style={{
            fontSize: 50,
            fontWeight: '700',
            color: colors.white,
          }}>
          ₹ 34,234
        </Text>
      </View>
      <View style={styles.whiteCard}>
        <View style={{flexDirection: 'row', padding: 20}}>
          <TouchableOpacity
            style={{
              padding: 6,
              borderBottomWidth: 2,
              borderBottomColor: isExpenseSelected ? '#000' : colors.white,
            }}
            onPress={onTabPressed}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 22,
                color: isExpenseSelected ? '#00192D' : '#8e9aaf',
              }}>
              Expences
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: 20,
              padding: 6,
              borderBottomWidth: 2,
              borderBottomColor: isExpenseSelected ? colors.white : '#000',
            }}
            onPress={onTabPressed}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 22,
                color: isExpenseSelected ? '#8e9aaf' : '#00192D',
              }}>
              Earning
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{padding: 20}}
          data={isExpenseSelected ? transactions : earnings}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Transaction
              transaction={item}
              onPress={val => console.warn(`Clicked ${val}`)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  whiteCard: {
    height: 1000,
    width: '100%',
    marginTop: 50,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});

export default HomeScreen;
