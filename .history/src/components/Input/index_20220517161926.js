import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { COLOR, SIZE } from '../../theme'

const Input = () => {
  return (
    <View style={styles.container}>
      <TextInput />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container:{
    borderWidth:1,
    borderColor:COLOR.primary,
    width:SIZE.input1,
    height:56,
    borderRadius:16,
    backgroundColor:COLOR.primary4
  }
})