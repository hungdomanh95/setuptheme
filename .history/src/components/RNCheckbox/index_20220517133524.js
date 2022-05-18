import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CheckBox from '@react-native-community/checkbox';
import { SIZE } from '../../theme';
const RNCheckbox = () => {
  return (
    <CheckBox
    style={styles.container}
    disabled={false}
    value={toggleCheckBox}
    boxType={'square'}
    onValueChange={newValue => setToggleCheckBox(newValue)}
    onFillColor={COLOR.primary}
    onTintColor={"transparent"}
    onCheckColor={COLOR.white}
    tintColor={COLOR.primary}
    // lineWidth={3}
  />
  )
}

export default RNCheckbox

const styles = StyleSheet.create({
  container:{
    width:SIZE.checkbox,
    height:SIZE.checkbox,
  }
})