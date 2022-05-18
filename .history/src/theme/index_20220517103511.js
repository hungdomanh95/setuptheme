import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const width_design = 375;
export const size = {
  width,
  height,
  spacing: 16,
  icon: 24,
  btn1: (width * 343) / width_design,
  btn2: (width * 196) / width_design,
  btn3: (width * 160) / width_design,
};
export const color = {
  primary: '#002665',
  primary80: "rgba(0, 38, 101, 0.8)",
  primary60: "rgba(0, 38, 101, 0.6)",
  primary40: "rgba(0, 38, 101, 0.4)",
  primary24: "rgba(0, 38, 101, 0.24)",
  primary16: "rgba(0, 38, 101, 0.16)",
  primary8: "rgba(0, 38, 101, 0.08)",
  primary4: "rgba(0, 38, 101, 0.04)",
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
  gray: '#6D7E92',
  green: '#18A348',
  red: '#DA000B',
  neural: '#FFB200',
  orange: '#F44B02',
  infor: '#0289F4',
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
