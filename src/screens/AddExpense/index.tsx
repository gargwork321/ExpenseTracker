import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  Modal,
} from 'react-native';
import values from '../../constants/values';
import colors from '../../constants/colors';
import {entryContext} from '../../realm';
import {categories} from '../../constants/data';
import {Category} from '../../model/transactionType';
import {Switch} from 'react-native';

const AddExpenseScreen = ({navigation}) => {
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');
  const [isEarning, setIsEarning] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const defautCat: Category = {
    image: require('../../../assets/images/category.png'),
    bgColor: '#F6AFB0',
  };
  const [selectedCategory, setSelectedCategory] = useState<Category>(defautCat);
  const showingCategory = categories.filter(
    cat => cat.isExpense === !isEarning,
  );
  const {useRealm} = entryContext;
  const realm = useRealm();
  const handleOptionSelect = cat => {
    setSelectedCategory(cat);
    setShowDropdown(false);
  };
  const backToHome = () => {
    navigation.goBack();
  };

  const onSwitch = value => {
    setIsEarning(value);
    setSelectedCategory(defautCat);
  };

  const addEntry = useCallback(() => {
    realm.write(() => {
      realm.create('Entry', {
        _id: new Realm.BSON.ObjectID(),
        price: amount,
        notes: notes,
        date: new Date().toLocaleDateString(),
        cat: selectedCategory,
        isExpense: !isEarning,
      });
    });
    backToHome();
  }, [amount, notes, isEarning]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.whiteContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={backToHome}>
            <Image
              resizeMode="contain"
              style={styles.closeBtn}
              source={require('../../../assets/images/close.png')}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add Transaction</Text>
        </View>
        <View style={styles.rows}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/expense.png')}
            />
          </View>
          <TextInput
            placeholder="amount"
            keyboardType="numeric"
            style={styles.textInput}
            onChangeText={setAmount}
            value={amount}
          />
        </View>
        <TouchableOpacity
          onPress={() => setShowDropdown(true)}
          style={styles.rows}>
          <View
            style={[
              styles.imageContainer,
              {backgroundColor: selectedCategory.bgColor},
            ]}>
            <Image style={styles.image} source={selectedCategory.image} />
          </View>
          <TextInput
            placeholder="category"
            style={styles.textInput}
            value={selectedCategory.name}
            editable={false}
          />
        </TouchableOpacity>
        <Modal visible={showDropdown} animationType="slide">
          <View style={styles.modalContainer}>
            {showingCategory.map(catg => (
              <TouchableOpacity
                key={catg}
                onPress={() => handleOptionSelect(catg)}
                style={styles.option}>
                <Image source={catg.image} style={styles.optionImage} />
                <Text>{catg.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>
        <View style={styles.rows}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/notes.png')}
            />
          </View>
          <TextInput
            placeholder="notes"
            style={styles.textInput}
            onChangeText={setNotes}
            value={notes}
          />
        </View>
        <View style={styles.radioContainer}>
          <Text style={styles.radioText}>Expense</Text>
          <Switch value={isEarning} onValueChange={value => onSwitch(value)} />
          <Text style={styles.radioText}>Earning</Text>
        </View>
        <TouchableOpacity style={styles.addBtnContiner} onPress={addEntry}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  closeBtn: {
    width: 30,
    height: 30,
  },
  headerTitle: {
    alignSelf: 'center',
    marginLeft: 30,
    fontSize: 25,
    fontWeight: '700',
    fontFamily: 'Trebuchet MS',
  },
  rows: {flexDirection: 'row', padding: 30},
  whiteContainer: {
    height: 1000,
    width: '100%',
    marginTop: 75,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  backButton: {
    width: 40,
    height: 40,
    marginLeft: 10,
    alignSelf: 'center',
    padding: 5,
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
    backgroundColor: '#3dccc4',
  },
  textInput: {
    fontSize: 30,
    marginLeft: 10,
    borderBottomWidth: 2,
    padding: 10,
    fontFamily: 'Trebuchet MS',
  },
  addBtnContiner: {
    width: 150,
    height: 60,
    backgroundColor: colors.background,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },
  addButtonText: {
    color: colors.white,
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: '600',
    fontFamily: 'Trebuchet MS',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    height: 200,
    marginTop: 100,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  optionImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
  },
  radioText: {
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'Trebuchet MS',
  },
  radioContainer: {
    flexDirection: 'row',
    padding: 20,
    marginLeft: 20,
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default AddExpenseScreen;
