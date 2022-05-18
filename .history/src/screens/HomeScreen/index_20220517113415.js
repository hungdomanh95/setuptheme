import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLOR, shadows} from '../../theme';
import {RNButton} from '../../components';

const HomeScreen = () => {
const hanle = () => {
  console.log("---");
}
  return (
    <View style={styles.container}>
      <RNButton text="Button" type={'primary'} size={'fullsize'} onPress={hanle} />
      <RNButton text="Button" type={'danger'} size={'medium'} />
      <RNButton text="Button" type={'success'} size={'small'} />
      <RNButton text="Button" type={'warning'} size={80} />
      <RNButton text="Button" color={COLOR.neural8} colorText={COLOR.neural} />
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
