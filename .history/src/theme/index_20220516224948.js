import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const size = {
  width,
  height,
};
export const COLOR = {
  PRIMARY: '#002665',
  SECONDARY: '#2567F9',
  WHITE: '#FFFFFF',
  YELLOW: '#FFB200',
  GRAY: '#011E32',
  GREEN: '#18A348',
  RED: '#DA000B',
};
export const text = StyleSheet.create({
  h1: {
    fontSize: 22,
    lineHeight: 33,
  },
  h2: {
    fontSize: 20,
    lineHeight: 30,
  },
  h3: {
    fontSize: 18,
    lineHeight: 27,
  },
  h4: {
    fontSize: 16,
    lineHeight: 24,
  },
  textLarge: {
    fontSize: 14,
    lineHeight: 21,
  },
  textMedium: {
    fontSize: 12,
    lineHeight: 18,
  },
  textSmall: {
    fontSize: 10,
    lineHeight: 15,
  },
  bold: {
    fontWeight: '700',
  },
  medium: {
    fontWeight: '500',
  },
  regular: {
    fontWeight: '400',
  },
});
export const shadows = StyleSheet.create({
  shadows5: {
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0, 38, 101, 0.1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
