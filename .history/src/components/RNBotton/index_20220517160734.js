import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {COLOR, SIZE, TEXT} from '../../theme';

const RNButton = props => {
  const {text, type, size, onPress, disabled, style} = props;

  const colorBTN = () => {
    let colorBtn = COLOR.primary
    if (disabled) colorBtn = COLOR.primary8;
    else if (type === 'success') colorBtn = COLOR.green;
    else if (type === 'warning') colorBtn = COLOR.neural;
    else if (type === 'danger') colorBtn = COLOR.red;
    else if (type === 'primary') colorBtn = COLOR.primary;
    else if (props.color) colorBtn = props.color;
    return colorBtn;
  };
  const sizeBTN = () => {
    let sizeBtn = "90%";
    if (size === 'fullsize') sizeBtn = SIZE.btn1;
    else if (size === 'medium') sizeBtn = SIZE.btn2;
    else if (size === 'small') sizeBtn = SIZE.btn3;
    else if (typeof size == 'number') sizeBtn = size;
    return sizeBtn;
  };
  const colorText = () => {
    let colorText = COLOR.white;
    if (disabled) colorText = COLOR.primary24;
    else if (props.colorText) colorText = props.colorText;
    return colorText;
  };
  const styles = styleWithProps(props, colorBTN(), sizeBTN(), colorText());
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styleWithProps = (props, color, size, colorText) => {
  return StyleSheet.create({
    container: {
      width: size,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color,
      borderRadius: 15,
      marginVertical: 5,
      ...props.style,
    },
    text: {
      color: colorText,
      ...TEXT.fz16,
      ...TEXT.bold,
    },
  });
};
export default RNButton;
