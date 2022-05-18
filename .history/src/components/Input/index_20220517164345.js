import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import {COLOR, SIZE} from '../../theme';

const Input = props => {
  const {placeholder, iconLeft, iconRight} = props;
  return (
    <View style={styles.container}>
      {iconLeft && <Image source={iconLeft} style={styles.iconLeft} />}
      <TextInput placeholder={placeholder || 'Text here'} />
      {iconRight && <Image source={iconRight} style={styles.iconRight} />}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLOR.primary8,
    width: SIZE.input1,
    height: 56,
    borderRadius: 16,
    backgroundColor: COLOR.primary4,
    paddingLeft: SIZE.spacing,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLeft: {
    width: SIZE.iconInput,
    height: SIZE.iconInput,
    marginRight: SIZE.spacing10,
  },
  iconRight:{
    width: SIZE.iconInput,
    height: SIZE.iconInput,
    alignSelf:"flex-end",
  }
});
