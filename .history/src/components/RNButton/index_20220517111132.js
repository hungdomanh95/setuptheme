import {StyleSheet, Text, View} from 'react-native';
import React,{useEffect} from 'react';
import {color, size, text} from '../../theme';

const RNButton = props => {
  const {text,type} = props;
  const colorBTN = () => {
    let colorBtn;
    if(type === "success") colorBtn = color.green
    else if(type === "warning") colorBtn = color.neural
  }


  const styles = styleWithProps(props, a = colorBTN());
  const styleWithProps = (props) =>
     StyleSheet.create({
      container: {
        width: size.btn1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorBtn,
        borderRadius: 15,
        marginVertical:5
      },
      text: {
        color: props.colorText || color.white ,
        ...text.fz16,
        ...text.bold,
      },
    });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default RNButton;
