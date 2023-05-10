import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../constants/colors';
import Transaction from './transaction';
import {useNavigation} from '@react-navigation/native';
import {Entry, entryContext} from '../../../realm';
import Font from '../../../constants/fonts';
import Screens from '../../../constants/screens';

const Statements = () => {
  const [isExpenseSelected, setExpenseSelected] = useState<boolean>(true);
  const navigation = useNavigation();
  //Realm
  const {useQuery} = entryContext;
  const transactions = useQuery(Entry);
  const showingTransaction = transactions.filter(
    trans => trans.isExpense === isExpenseSelected,
  );

  //Functions
  const onTabPressed = () => {
    setExpenseSelected(!isExpenseSelected);
  };

  const showDetail = useCallback(item => {
    navigation.navigate(Screens.TRANSACTION_DETAIL, {id: item._id});
  }, []);

  return (
    <>
      <View style={styles.whiteCard}>
        <View style={styles.tabBarContainer}>
          <TouchableOpacity
            style={styles.tabBox(isExpenseSelected)}
            onPress={onTabPressed}>
            <Text style={styles.tabText(!isExpenseSelected)}>Expences</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabBox(!isExpenseSelected)}
            onPress={onTabPressed}>
            <Text style={styles.tabText(isExpenseSelected)}>Earning</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.listPadding}
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
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  tabBarContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  tabBox: (flag: boolean) => ({
    padding: 6,
    borderBottomWidth: 2,
    borderBottomColor: flag ? colors.balck : colors.white,
  }),
  tabText: (flag: boolean) => ({
    fontWeight: 'bold',
    fontSize: 22,
    color: flag ? colors.gray : colors.balck,
    fontFamily: Font.TREBUCHET_REGULAR,
  }),
  listPadding: {
    padding: 20,
  },
});

export default Statements;
