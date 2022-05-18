import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const globalStyle = StyleSheet.create({
  width,
  height,
  h2: {
    fontSize: 32,
    fontWeight: '700',
  },
  h3: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainColor: '#0abde3',
});

export default globalStyle;
