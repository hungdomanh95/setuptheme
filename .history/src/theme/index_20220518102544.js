import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const width_design = 375;
export const SIZE = {
  width,
  height,
  spacing: 16,
  spacing10:10,
  icon: 24,
  btn1: (width * 343) / width_design,
  btn2: (width * 196) / width_design,
  btn3: (width * 160) / width_design,
  height_btn: 50,
  checkbox: 25,

  iconInput:16,
  input1:(width * 311) / width_design,
  height_input:56,
  width_btnInput:65,
  height_btnInput:25,
};
export const COLOR = {
  primary: '#002665',
  primary80: 'rgba(0, 38, 101, 0.8)',
  primary60: 'rgba(0, 38, 101, 0.6)',
  primary40: 'rgba(0, 38, 101, 0.4)',
  primary24: 'rgba(0, 38, 101, 0.24)',
  primary16: 'rgba(0, 38, 101, 0.16)',
  primary8: 'rgba(0, 38, 101, 0.08)',
  primary4: 'rgba(0, 38, 101, 0.04)',
  secondary: '#2567F9',
  secondary50: '#0077FF',
  secondary40: 'rgba(0, 119, 255, 0.4)',
  secondary24: 'rgba(0, 119, 255, 0.24)',
  secondary16: 'rgba(0, 119, 255, 0.16)',
  secondary8: 'rgba(0, 119, 255, 0.08)',
  white: '#FFFFFF',
  white64: 'rgba(255,255,255,0.64)',
  white40: 'rgba(255,255,255,0.4)',
  white24: 'rgba(255,255,255,0.24)',
  white16: 'rgba(255,255,255,0.16)',
  white8: 'rgba(255,255,255,0.08)',
  white4: 'rgba(255,255,255,0.04)',
  yellow: '#FDBE01',
  yellow80: 'rgba(253, 190, 1, 0.8)',
  yellow40: 'rgba(253, 190, 1, 0.4)',
  yellow16: 'rgba(253, 190, 1, 0.16)',
  red: '#DA000B',
  red80: 'rgba(227, 38, 46, 0.8)',
  red40: 'rgba(227, 38, 46, 0.4)',
  red16: 'rgba(227, 38, 46, 0.16)',
  gray: '#6D7E92',
  gray40: '#7689A2',
  gray24: '#B3BDCB',
  gray16: '#DADFE6',
  gray8: '#F9FAFD',
  green: '#18A348',
  green50: '#25C26E',
  green40: 'rgba(37, 194, 110, 0.4)',
  green24: 'rgba(37, 194, 110, 0.24)',
  neural: '#FFB200',
  neural80: 'rgba(255, 178, 0, 0.8)',
  neural40: 'rgba(255, 178, 0, 0.4)',
  neural24: 'rgba(255, 178, 0, 0.24)',
  neural16: 'rgba(255, 178, 0, 0.16)',
  neural8: 'rgba(255, 178, 0, 0.08)',
  orange: '#F44B02',
  orange80: 'rgba(244, 75, 2, 0.8)',
  orange40: 'rgba(244, 75, 2, 0.4)',
  orange8: '#FFECE3',
  infor: '#0289F4',
  infor80: 'rgba(2, 137, 244, 0.8)',
  infor40: 'rgba(2, 137, 244, 0.4)',
  infor10: 'rgba(2, 137, 244, 0.1)',
};
export const TEXT = StyleSheet.create({
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
export const SHADOWS = StyleSheet.create({
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
