import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../constants/colors';
import Transaction from './transaction';
import {useNavigation} from '@react-navigation/native';
import {Entry, entryContext} from '../../../realm';

const Statements = () => {
  const [isExpenseSelected, setExpenseSelected] = useState<boolean>(true);
  const navigation = useNavigation();
  const {useQuery} = entryContext;
  const transactions = useQuery(Entry);
  const showingTransaction = transactions.filter(
    trans => trans.isExpense === isExpenseSelected,
  );
  const onTabPressed = () => {
    console.log('tab pressed');
    setExpenseSelected(!isExpenseSelected);
  };

  const showDetail = item => {
    console.warn(`Clicked ${item.heading}`);
    navigation.navigate('TransactionDetail', {transaction: item});
  };
  return (
    <>
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
                fontFamily: 'Trebuchet MS',
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
                fontFamily: 'Trebuchet MS',
              }}>
              Earning
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{padding: 20}}
          data={showingTransaction}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Transaction
              transaction={item}
              onPress={item => showDetail(item)}
              isFromDashboard={true}
            />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  whiteCard: {
    height: 1000,
    width: '100%',
    marginTop: 50,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});

export default Statements;
