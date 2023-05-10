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
import Screens from '../../constants/screens';
import Font from '../../constants/fonts';

const Summary: React.FC = () => {
  const navigation = useNavigation();
  //Realm
  const {useQuery} = entryContext;
  const transactions = useQuery(Entry);
  //Functions
  const backToHome = () => {
    navigation.goBack();
  };
  const showDetail = item => {
    navigation.navigate(Screens.TRANSACTION_DETAIL, {id: item._id});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.whiteContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton} onPress={backToHome}>
            <Image
              resizeMode="contain"
              style={styles.imageSize(30)}
              source={require('../../../assets/images/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Summary</Text>
        </View>
        <View>
          <FlatList
            style={styles.padding}
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
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    padding: 20,
    paddingLeft: 10,
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    marginLeft: 10,
    alignSelf: 'center',
    padding: 5,
  },
  headerTitle: {
    alignSelf: 'center',
    marginLeft: 20,
    fontSize: 25,
    fontWeight: '700',
    fontFamily: Font.TREBUCHET_REGULAR,
  },
  imageSize: (size: number) => ({
    width: size,
    height: size,
  }),
  padding: {
    padding: 20,
  },
});
export default Summary;
