import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {COLOR, SIZE, TEXT} from '../../theme';

const ButtonInput = props => {
  const {text,onPress, disabled} = props;

  const styles = styleWithProps(props);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styleWithProps = (props) => {
  return StyleSheet.create({
    container: {
      width: 65,
      height: 25,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      backgroundColor: COLOR.primary,
      position: "absolute",
      right:SIZE.spacing,
      ...props.style,
    },
    text: {
      color: COLOR.white,
      ...TEXT.fz14,
      ...TEXT.medium,
    },
  });
};
export default ButtonInput;
