import {StyleSheet, Text, View, Switch} from 'react-native';
import React, {useState} from 'react';
import { COLOR } from '../../theme';

const RNSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Switch
      style={styles.container}
      trackColor={{false:`${COLOR.gray24}`, true: `${COLOR.primary}`}}
      // ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default RNSwitch;

const styles = StyleSheet.create({
  container:{
    width:50,
    height:25
  }
});
