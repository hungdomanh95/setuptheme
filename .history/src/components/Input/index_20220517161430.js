import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { COLOR } from '../../theme'

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
    borderColor:COLOR.primary
  }
})