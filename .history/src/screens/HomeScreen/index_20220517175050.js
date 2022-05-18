import {View, StyleSheet} from 'react-native';
import React from 'react';
import {COLOR} from '../../theme';
import {Button, CheckBox, Input} from '../../components';
const icon = require("../../assets/icon/Categary.png")

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Button text="Button" type={'primary'} size={'fullsize'} />
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

      <CheckBox /> */}
      <Input placeholder="Text here"/>
      <Input placeholder="Text here" iconLeft={icon} />
      <Input placeholder="Text here" iconRight={icon} />
      <Input placeholder="Text here" onPress={handle} btn-right />
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
