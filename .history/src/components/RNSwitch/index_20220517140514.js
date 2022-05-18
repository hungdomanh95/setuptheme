import {StyleSheet, Text, View,Switch} from 'react-native';
import React, {useState} from 'react';
import { COLOR } from '../../theme';
const RNSwitch = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} style={styles.container} width={150} />
  );
};

export default RNSwitch;

const styles = StyleSheet.create({
  container:{
    // minWidth:150,
    // height:25,
    // backgroundColor:'red',
    transform:[{ scaleX: .8 }, { scaleY: .8 }]
  }
});
