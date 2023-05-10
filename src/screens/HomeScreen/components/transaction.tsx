import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import values from '../../../constants/values';
import CustomButton from '../../../components/customButton';
import {Entry, entryContext} from '../../../realm';
import {useNavigation} from '@react-navigation/native';
import Screens from '../../../constants/screens';

type TransactionProps = {
  transaction: Entry;
  onPress: () => {};
  isFromDashboard: boolean;
};
const Transaction = ({
  transaction,
  onPress,
  isFromDashboard = false,
}: TransactionProps) => {
  const eyeIcon = require('../../../../assets/images/eye.png');
  const updateIcon = require('../../../../assets/images/update.png');
  const deleteIcon = require('../../../../assets/images/delete.png');
  const navigation = useNavigation();
  const {useRealm} = entryContext;
  const realm = useRealm();
  const deleteTransaction = () => {
    realm.write(() => {
      realm.delete(transaction);
    });
  };
  const updateTransaction = () => {
    navigation.navigate(Screens.ADD_EXPENSE, {
      transaction: transaction,
      isUpdate: true,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View
          style={[
            styles.imageContainer,
            {backgroundColor: transaction.cat.bgColor},
          ]}>
          <Image style={styles.image} source={transaction.cat.image} />
        </View>
        <View>
          <Text style={values.pStyle}>{transaction.cat.name}</Text>
          <Text style={values.h2Style}>{transaction.price}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <CustomButton
          size={30}
          bgColor={'#E7941B'}
          image={eyeIcon}
          onPress={() => onPress(transaction)}
        />

        {!isFromDashboard ? (
          <>
            <CustomButton
              size={30}
              bgColor={'#9DD241'}
              onPress={updateTransaction}
              image={updateIcon}
            />
            <CustomButton
              size={30}
              bgColor={'#DC4F33'}
              onPress={deleteTransaction}
              image={deleteIcon}
            />
          </>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: 70,
    borderRadius: 10,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingEnd: 15,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginRight: 20,
  },
});

export default Transaction;
