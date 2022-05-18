import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLOR, shadows} from '../../theme';
import {RNButton} from '../../components';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <RNButton text="Button" color={COLOR.primary}  />
      <RNButton text="Button" type={"danger"} />
      <RNButton text="Button" type={"success"} />
      <RNButton text="Button" type={"warning"} />
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
