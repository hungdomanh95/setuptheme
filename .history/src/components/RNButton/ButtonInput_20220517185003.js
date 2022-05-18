import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {COLOR, SIZE, TEXT} from '../../theme';
import LinearGradient from 'react-native-linear-gradient';

const ButtonInput = props => {
  const {text, onPress, disabled} = props;

  const styles = styleWithProps(props);
  return (
    <LinearGradient
      useAngle angle={39.81}
      // start={{x: 0, y: 0}}
      // end={{x: 1, y: 0}}
      colors={[`${COLOR.primary}`, '#003A9A']}
      locations={[0.1522, 0.8457]}
      style={styles.container}>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styleWithProps = props => {
  return StyleSheet.create({
    container: {
      width: SIZE.width_btnInput,
      height: SIZE.height_btnInput,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      position: 'absolute',
      right: SIZE.spacing10,
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
