import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {COLOR, SIZE, text} from '../../theme';

const RNButton = props => {
  const {text, type, size} = props;

  const colorBTN = () => {
    let colorBtn;
    if (type === 'success') colorBtn = COLOR.green;
    else if (type === 'warning') colorBtn = COLOR.neural;
    else if (type === 'danger') colorBtn = COLOR.red;
    else if (type === 'primary') colorBtn = COLOR.primary;
    else if (props.color) colorBtn = props.color;
    return colorBtn;
  };
  const sizeBTN = () => {
    let sizeBtn = SIZE.btn1;
    if(size === "fullsize") sizeBtn = SIZE.btn1
    else if(size === "medium") sizeBtn = SIZE.btn2
    else if(size === "small") sizeBtn = SIZE.btn3
    else if(typeof size == 'number') sizeBtn = size
    console.log('isNaN(size): ', isNaN(undefined));
    console.log('size: ', size, sizeBtn);
    return sizeBtn;
  }
  const styles = styleWithProps(props, colorBTN(), sizeBTN());
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styleWithProps = (props, color, size) => {
  return StyleSheet.create({
    container: {
      width:size,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color,
      borderRadius: 15,
      marginVertical: 5,
    },
    text: {
      color: props.colorText || COLOR.white,
      ...text.fz16,
      ...text.bold,
    },
  });
};
export default RNButton;
