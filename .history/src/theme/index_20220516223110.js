import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const size = {
  width,
  height,
};
export const COLOR = {
  PRIMARY: '#002665',
  SECONDARY: '#2567F9',
  WHITE:"#FFFFFF",
  YELLOW:"#FFB200",
  GRAY:"#011E32",
  GREEN:"#18A348",
  RED:"#DA000B",
};
const text = StyleSheet.create({
  h1:{
    fontSize:22,
    lineHeight:33
  },
  h2:{
    fontSize:22,
    lineHeight:33
  },
});


