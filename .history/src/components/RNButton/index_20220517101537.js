import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, size, text } from '../../theme'

const RNButton = (props) => {
  const {text} = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default RNButton

const styles = StyleSheet.create({
  container:{
    width:size.btn1,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"red",
    borderRadius:15
  },
  text:{
    color:COLOR.WHITE,
    ...text.fz16
  }
})