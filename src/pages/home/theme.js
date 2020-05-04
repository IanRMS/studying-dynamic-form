import {buildTheme} from 'react-native-dynamic-form';

const myColors = {
  primary: '#00b0ff',
  textPrimary: '#424242',
  primaryDark: '#0077cb',
  error: '#FF6565',
  iconDark: 'rgba(0,0,0,0.4)',
  textInputBorderColor: '#cac8c8',
  placeholderTextColor: '#A9A9A9',
  starFillColor: '#f5a623',
  black: '#000000',
  white: '#FFFFFF',
  success: '#50e3c2',
};

const myTheme = {
  input: {
    placeholderTextColor: myColors.placeholderTextColor,
    iconColor: myColors.primary,
    style: {borderRadius: 8, backgroundColor: myColors.white},
  },
};

const theme = buildTheme(myColors, myTheme);

export default theme;
