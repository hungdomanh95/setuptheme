import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import {COLOR, SIZE} from '../../theme';

const Input = props => {
  const {placeholder, iconLeft, iconRight, onChangeText, value} = props;
  const styles = styleWithProps(props);
  return (
    <View style={styles.container}>
      {iconLeft && <Image source={iconLeft} style={styles.iconLeft} />}
      <TextInput
        placeholder={placeholder || 'Text here'}
        onChangeText={onChangeText}
        value={value}
      />
      {iconRight && <Image source={iconRight} style={styles.iconRight} />}
    </View>
  );
};

const styleWithProps = props =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: COLOR.primary8,
      width: SIZE.input1,
      height: 56,
      borderRadius: 16,
      backgroundColor: COLOR.primary4,
      paddingLeft: SIZE.spacing,
      paddingRight:props.iconLeft ? (SIZE.spacing + SIZE.iconInput) :  SIZE.spacing,
      paddingHorizontal: SIZE.spacing + SIZE.iconInput + SIZE.spacing10,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
      ...props.style,
    },
    iconLeft: {
      width: SIZE.iconInput,
      height: SIZE.iconInput,
      marginRight: SIZE.spacing10,
    },
    iconRight: {
      width: SIZE.iconInput,
      height: SIZE.iconInput,
      position: 'absolute',
      right: SIZE.spacing,
    },
  });
export default Input;
