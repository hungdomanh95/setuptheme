import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const size = {
  width,
  height,
  spacing: 16,
  icon:24
};
export const COLOR = {
  PRIMARY: '#002665',
  SECONDARY: '#2567F9',
  WHITE: '#FFFFFF',
  YELLOW: '#FDBE01',
  GRAY: '#6D7E92',
  GREEN: '#18A348',
  RED: '#DA000B',
  NEURAL: '#FFB200',
  ORANGE:"#F44B02",
  COLOR_INFOR:"#0289F4",


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
  fz16: {
    fontSize: 16,
    lineHeight: 24,
  },
  fz14: {
    fontSize: 14,
    lineHeight: 21,
  },
  fz12: {
    fontSize: 12,
    lineHeight: 18,
  },
  fz10: {
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
  sh: {
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0, 38, 101, 0.1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 5,
    elevation: 5,
  },
});
