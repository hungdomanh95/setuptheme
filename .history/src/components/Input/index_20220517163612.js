import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { COLOR, SIZE } from '../../theme'

const Input = (props) => {
  const {placeholder, iconLeft} = props
  console.log('iconLeft: ', iconLeft);
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder || "Text here"} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container:{
    borderWidth:1,
    borderColor:COLOR.primary8,
    width:SIZE.input1,
    height:56,
    borderRadius:16,
    backgroundColor:COLOR.primary4,
    justifyContent:'center',
    paddingLeft:SIZE.spacing
  }
})