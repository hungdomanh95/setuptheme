import {View, Text, StyleSheet, Switch} from 'react-native';
import React, {useState} from 'react';
import {COLOR, shadows} from '../../theme';
import {Button, CheckBox} from '../../components';

const HomeScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const hanle = () => {};
  return (
    <View style={styles.container}>
      <Button
        text="Button"
        type={'primary'}
        size={'fullsize'}
        onPress={hanle}
      />
      <Button
        text="Button"
        type={'primary'}
        size={'fullsize'}
        onPress={hanle}
        disabled={true}
      />
      <Button text="Button" type={'danger'} size={'medium'} />
      <Button text="Button" type={'success'} size={'small'} />
      <Button text="Button" type={'warning'} size={80} />
      <Button text="Button" color={COLOR.neural8} colorText={COLOR.neural} />
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

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
