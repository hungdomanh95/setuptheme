import {View, Text} from 'react-native';
import React from 'react';
import {shadows} from '../../theme';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[{width: 100, height: 100}, {...shadows.sh}]} />
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
