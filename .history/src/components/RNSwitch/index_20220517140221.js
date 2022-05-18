import {StyleSheet, Text, View,Switch} from 'react-native';
import React, {useState} from 'react';
import { COLOR } from '../../theme';
const RNSwitch = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} style={styles.container} />
  );
};

export default RNSwitch;

const styles = StyleSheet.create({
  container:{
    minWidth:150,
    height:25,
    backgroundColor:'red',
    flexDirection:"row",
    justifyContent:"center",
    alignItems:'center'
  }
});
