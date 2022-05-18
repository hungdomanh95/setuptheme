import {View, Text,StyleSheet} from 'react-native';
import React from 'react';
import {shadows} from '../../theme';
import { RNButton } from '../../components';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <RNButton text="BUTTON" />
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
