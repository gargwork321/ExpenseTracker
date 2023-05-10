import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import colors from '../../constants/colors';
import TopHeader from './components/topHeader';
import Spacer from './components/spacer';
import MainBalance from './components/mainBalance';
import Statements from './components/statements';

type Props = {
  navigation: any;
};

const HomeScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.padding}>
        <TopHeader />
        <Spacer height={50} />
        <MainBalance balance={3423} />
      </View>
      <Statements />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: colors.background,
  },
  padding: {
    padding: 20,
  },
});

export default HomeScreen;
