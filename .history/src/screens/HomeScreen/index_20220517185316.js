import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {COLOR} from '../../theme';
import {Button, CheckBox, Input} from '../../components';
const icon = require('../../assets/icon/Categary.png');
const HomeScreen = () => {
  const handle = () => {
  };
  return (
    <View style={styles.container}>
      <Button text="Button" type={'primary'} size={'fullsize'} />
      <Button text="Button" type={'danger'} size={'medium'} />
      <Button text="Button" type={'success'} size={'small'} />
      <Button
        text="Button"
        type={'primary'}
        size={'fullsize'}
        disabled={true}
      />
      <CheckBox />
      <Input placeholder="Text here" />
      <Input placeholder="Text here" iconLeft={icon} />
      <Input placeholder="Text here" iconRight={icon} />
      <Input placeholder="Text here" onPress={handle} />
      <Input placeholder="Text here" iconLeft={icon} onPress={handle} />

    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
