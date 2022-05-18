import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {COLOR, SIZE, TEXT} from '../../theme';
import LinearGradient from 'react-native-linear-gradient';

const ButtonInput = props => {
  const {text,onPress, disabled} = props;

  const styles = styleWithProps(props);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disabled}>
     <LinearGradient
     start={{x: 0, y: 0}} end={{x: 1, y: 0}}
     colors={['#002665', '#003A9A']}
     locations={[0.1522, 0.8457]}
     >
      <Text style={styles.text}>{text}</Text>
    </LinearGradient>
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
      // backgroundColor: COLOR.primary,
      position: "absolute",
      right:SIZE.spacing10,
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
