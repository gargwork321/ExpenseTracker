import React from 'react';
import {StyleSheet, Text} from 'react-native';
import colors from '../../../constants/colors';

type BalanceProps = {
  balance: number;
};
const MainBalance = ({balance}: BalanceProps) => {
  return (
    <>
      <Text style={styles.title}>Balance</Text>
      <Text style={styles.balance}>₹ {balance}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: colors.white,
    fontWeight: '700',
    fontFamily: 'Trebuchet MS',
  },
  balance: {
    fontSize: 50,
    fontWeight: '700',
    color: colors.white,
    fontFamily: 'Trebuchet MS',
  },
});
export default MainBalance;
