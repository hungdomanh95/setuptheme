import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {COLOR} from '../../theme';
import {Button, CheckBox, Input} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
const icon = require('../../assets/icon/Categary.png');
const HomeScreen = () => {
  const handle = () => {
    console.log('=====--------');
  };
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
      <Input placeholder="Text here" />
      <Input placeholder="Text here" iconLeft={icon} />
      <Input placeholder="Text here" iconRight={icon} />
      <Input placeholder="Text here" onPress={handle} />

      <LinearGradient
      start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        colors={['#002665', '#003A9A']}
        locations={[0.1522, 0.8457]}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>Sign in with Facebook</Text>
      </LinearGradient>
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
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
