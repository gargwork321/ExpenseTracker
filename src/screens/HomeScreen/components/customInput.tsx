import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Spacer from './spacer'

const CustomInput = ({placeholder = 'Enter'}) => {
  return (
    <View style={styles.container}>
      <Spacer width={10}/>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 45,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        paddingLeft: 15,
    },
    input: {
        width: '100%',
        height: '100%',
    }
})

export default CustomInput;
