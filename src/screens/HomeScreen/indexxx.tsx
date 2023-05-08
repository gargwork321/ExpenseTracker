import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import values from '../../constants/values';
import TopHeader from './components/topHeader';
import Spacer from './components/spacer';
import CustomInput from './components/customInput';
import {categories, transactions} from '../../constants/data';
import Category from './components/category';
import Transaction from './components/transaction';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.horizontalPaddingView}>
        <TopHeader />
        <Spacer height={20} />
        <CustomInput placeholder="Search" />
        <Spacer height={20} />
        <Text style={values.h2Style}>Categories</Text>
        <Spacer height={20} />
      </View>
      <View style={{paddingLeft: values.horizontalPadding}}>
        <FlatList
          horizontal
          data={categories}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Category
              category={item}
              onPress={val => console.warn(`Clicked ${val}`)}
            />
          )}
        />
      </View>
      <View style={styles.horizontalPaddingView}>
        <Spacer height={20} />
        <Text style={values.h2Style}>Transactions History</Text>
        <Spacer height={20} />
        <FlatList
          data={transactions}
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
    paddingTop: values.verticalPadding + 40,
    backgroundColor: '#E9EEEF',
  },
  horizontalPaddingView: {
    paddingHorizontal: values.horizontalPadding,
  },
  profileCircle: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  expenseCard: {
    padding: 100,
    height: 200,
    backgroundColor: 'gray',
    marginTop: '50',
  },
});

export default HomeScreen;
