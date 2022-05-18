import {StyleSheet, Text, View} from 'react-native';
import React,{useEffect} from 'react';
import {COLOR, size, text} from '../../theme';

const RNButton = props => {
  const {text,type} = props;

  const colorBTN = () => {
    let colorBtn;
    if(type === "success") colorBtn = color.green
    else if(type === "warning") colorBtn = color.neural
  }


  const styles = styleWithProps(props,colorBTN());
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styleWithProps = (props, color) =>{
  console.log('color: ', color);
  return StyleSheet.create({
    container: {
      width: size.btn1,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.color,
      borderRadius: 15,
      marginVertical:5
    },
    text: {
      color: props.colorText || COLOR.white ,
      ...text.fz16,
      ...text.bold,
    },
  });
}
export default RNButton;
