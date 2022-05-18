import {StyleSheet, Text, View} from 'react-native';
import React,{useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {COLOR, SIZE} from '../../theme';
const CheckBoxComponent = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <CheckBox
      style={styles.container}
      disabled={props.disabled}
      value={toggleCheckBox}
      onValueChange={newValue => setToggleCheckBox(newValue)}
      boxType={'square'}
      onFillColor={COLOR.primary}
      onTintColor={'transparent'}
      onCheckColor={COLOR.white}
      tintColor={COLOR.primary}
    />
  );
};

export default CheckBoxComponent;

const styles = StyleSheet.create({
  container: {
    width: SIZE.checkbox,
    height: SIZE.checkbox,
  },
});
