import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { size } from '../../theme'

const RNButton = (props) => {
  return (
    <View style={styles.container}>
      <Text>Button</Text>
    </View>
  )
}

export default RNButton

const styles = StyleSheet.create({
  container:{
    width:size.btn1,
    height:50
  }
})