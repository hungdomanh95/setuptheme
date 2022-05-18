import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color, size, text} from '../../theme';

const RNButton = props => {
  const {text, color} = props;
  const styles = styleWithProps(props);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styleWithProps = props =>
  StyleSheet.create({
    container: {
      width: size.btn1,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.color,
      borderRadius: 15,
    },
    text: {
      color: props.colorText || color.white ,
      ...text.fz16,
      ...text.bold,
    },
  });
export default RNButton;
