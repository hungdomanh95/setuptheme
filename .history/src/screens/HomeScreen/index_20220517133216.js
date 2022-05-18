import {View, Text, StyleSheet, Switch} from 'react-native';
import React, {useState} from 'react';
import {COLOR, shadows} from '../../theme';
import {RNButton} from '../../components';
import CheckBox from '@react-native-community/checkbox';
const HomeScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const hanle = () => {};
  return (
    <View style={styles.container}>
      <RNButton
        text="Button"
        type={'primary'}
        size={'fullsize'}
        onPress={hanle}
      />
      <RNButton
        text="Button"
        type={'primary'}
        size={'fullsize'}
        onPress={hanle}
        disabled={true}
      />
      <RNButton text="Button" type={'danger'} size={'medium'} />
      <RNButton text="Button" type={'success'} size={'small'} />
      <RNButton text="Button" type={'warning'} size={80} />
      <RNButton text="Button" color={COLOR.neural8} colorText={COLOR.neural} />
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <CheckBox
        style={{width:50}}
        disabled={false}
        value={toggleCheckBox}
        boxType={'square'}
        onValueChange={newValue => setToggleCheckBox(newValue)}
        onFillColor={COLOR.primary}
        onTintColor={"transparent"}
        onCheckColor={COLOR.white}
        tintColor={COLOR.primary}
        lineWidth={3}
      />
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
