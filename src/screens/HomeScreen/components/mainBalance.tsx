import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../../components/customButton';

type BalanceProps = {
  balance: number;
};
const MainBalance = ({balance}: BalanceProps) => {
  const navigation = useNavigation();
  const showSummary = () => {
    navigation.navigate('Summary');
  };
  return (
    <>
      <Text style={styles.title}>Balance</Text>
      <Text style={styles.balance}>₹{balance}</Text>
      <TouchableOpacity onPress={showSummary}>
        <View style={styles.container}>
          <Text style={styles.summary}>Summary</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 100,
    height: 40,
  },
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
  summary: {
    fontSize: 18,
    color: colors.white,
    fontWeight: '500',
    fontFamily: 'Trebuchet MS',
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 10,
    padding: 8,
    backgroundColor: '#419DC5',
    overflow: 'hidden',
  },
});
export default MainBalance;
