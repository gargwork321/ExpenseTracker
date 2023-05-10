import React from 'react';
import {
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
import Font from '../../constants/fonts';
import {useNavigation} from '@react-navigation/native';

const TransactionDetailScreen = ({route}) => {
  const {useObject} = entryContext;
  const id = route.params.id;
  const navigation = useNavigation();
  const backToHome = () => {
    navigation.goBack();
  };
  const transaction = id ? useObject(Entry, id) : undefined;
  console.log('from realm=>', transaction);
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
          <Text style={styles.headerText}>Transaction Detail</Text>
        </View>
        <View style={{flexDirection: 'row', padding: 20}}>
          <View
            style={[
              styles.imageContainer,
              {backgroundColor: transaction.cat.bgColor},
            ]}>
            <Image
              style={styles.imageSize(100)}
              source={transaction.cat.image}
            />
          </View>
          <View style={styles.detailsBox}>
            <Text style={styles.amountTitle}>Amount</Text>
            <Text style={styles.price}>{transaction.price}</Text>
          </View>
        </View>
        <Text style={styles.notesTitle}>Notes</Text>
        <Text style={styles.notes}>{transaction.notes}</Text>
        <View style={styles.dateBox}>
          <Text style={styles.date}>{transaction.date}</Text>
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
  headerContainer: {
    flexDirection: 'row',
    padding: 20,
    paddingLeft: 10,
    alignItems: 'center',
  },
  headerText: {
    alignSelf: 'center',
    marginLeft: 20,
    fontSize: 25,
    fontWeight: '700',
    fontFamily: Font.TREBUCHET_REGULAR,
  },
  detailsBox: {
    marginLeft: 20,
    alignSelf: 'flex-end',
    flex: 1,
  },
  amountTitle: {
    fontSize: 30,
    fontWeight: '600',
    alignSelf: 'flex-end',
    fontFamily: Font.TREBUCHET_REGULAR,
    backgroundColor: colors.balck,
    color: colors.white,
    paddingHorizontal: 10,
  },
  price: {
    fontSize: 30,
    fontWeight: '600',
    alignSelf: 'flex-end',
    fontFamily: Font.TREBUCHET_REGULAR,
  },
  notesTitle: {
    fontSize: 30,
    fontWeight: '600',
    padding: 20,
    fontFamily: Font.TREBUCHET_REGULAR,
  },
  notes: {
    fontSize: 20,
    paddingHorizontal: 20,
    minHeight: 200,
    fontFamily: Font.TREBUCHET_REGULAR,
  },
  backButton: {
    width: 40,
    height: 40,
    marginLeft: 10,
    alignSelf: 'center',
    padding: 5,
  },
  dateBox: {
    flex: 1,
    padding: 20,
  },
  date: {
    fontSize: 20,
    alignSelf: 'flex-end',
    fontWeight: '500',
    fontFamily: Font.TREBUCHET_REGULAR,
  },
  imageSize: (size: number) => ({
    width: size,
    height: size,
  }),
  imageContainer: {
    height: 175,
    width: 175,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
});
export default TransactionDetailScreen;
