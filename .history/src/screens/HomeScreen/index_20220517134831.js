import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {COLOR, shadows} from '../../theme';
import {Button, CheckBox, Switch} from '../../components';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Button text="Button" type={'primary'} size={'fullsize'} />
      <Button text="Button" type={'danger'} size={'medium'} />
      <Button text="Button" type={'success'} size={'small'} />
      <Button text="Button" type={'warning'} size={80} />
      <Button
        text="Button"
        type={'primary'}
        size={'fullsize'}
        disabled={true}
      />
      <Button text="Button" color={COLOR.neural8} colorText={COLOR.neural} />
      <Switch />

      <CheckBox />
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
