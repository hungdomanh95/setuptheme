import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { size } from '../../theme'

const RNButton = (props) => {
  const {text} = props
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
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
    backgroundColor:"red"
  }
})