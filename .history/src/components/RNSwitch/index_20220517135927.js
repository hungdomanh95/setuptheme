import {StyleSheet, Text, View,Switch} from 'react-native';
import React, {useState} from 'react';
import { COLOR } from '../../theme';
const RNSwitch = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} style={styles.container} size={10} />
  );
};

export default RNSwitch;

const styles = StyleSheet.create({
  container:{
    width:50,
    height:25,
  }
});
