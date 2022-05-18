import {StyleSheet, Text, View, Switch} from 'react-native';
import React, {useState} from 'react';

const RNSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default RNSwitch;

const styles = StyleSheet.create({});
