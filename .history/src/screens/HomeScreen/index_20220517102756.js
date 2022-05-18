import {View, Text,StyleSheet} from 'react-native';
import React from 'react';
import {color, shadows} from '../../theme';
import { RNButton } from '../../components';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <RNButton text="Button" color={color.green} />
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
