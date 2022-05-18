import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import {COLOR, SIZE} from '../../theme';
import ButtonInput from '../RNButton/ButtonInput';
const Input = props => {
  const {placeholder, iconLeft, iconRight, onChangeText, value, onPress} = props;

  const paddingRightInput = () => {
    let padding = SIZE.spacing
    if((props.iconLeft || props.iconRight) && !onPress) padding = SIZE.spacing + SIZE.iconInput + SIZE.spacing10
    else if(onPress){
      if(!props.iconLeft) padding = 2*SIZE.spacing10 + SIZE.width_btnInput
      else padding =  2*SIZE.spacing10 + SIZE.width_btnInput +  SIZE.spacing + SIZE.iconInput
    }
    return padding
  }

  const styles = styleWithProps(props,paddingRightInput());

  return (
    <View style={styles.container}>
      {iconLeft && <Image source={iconLeft} style={styles.iconLeft} />}
      <TextInput
        placeholder={placeholder || 'Text here'}
        onChangeText={onChangeText}
        value={value}
      />
      {onPress && <ButtonInput onPress={onPress} type={'input'} text="Button" />}
      {iconRight && <Image source={iconRight} style={styles.iconRight} />}
    </View>
  );
};

const styleWithProps = (props, paddingRight) =>
  StyleSheet.create({
    container: {
      border: 1,
      borderColor: COLOR.primary8,
      borderColor: COLOR.red,
      backgroundColor: COLOR.primary4,
      borderRadius: 16,
      width: SIZE.input1,
      height: SIZE.height_input,
      paddingLeft: SIZE.spacing,
      paddingRight,
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
