import { DefaultTheme } from 'styled-components'

const primaryColor = "hsl(60deg 10% 82%)";
const primaryBlue = '#4B59F7';
const secondaryColor = '#9a9b8f';
const secondaryDark = '#5a5b54';
const darkColor = "#0a1822";
const lightColor = "#416F7C";
const accentColor = "hsl(177, 44, 41)";
const accentBlue = '#0467FB'

const breakpoints = [
  '360px', '768px', '1024px', '1280px', '1600px'
];

breakpoints['sm'] = breakpoints[0];
breakpoints['md'] = breakpoints[1];
breakpoints['lg'] = breakpoints[2];
breakpoints['xl'] = breakpoints[3];
breakpoints['xxl'] = breakpoints[4];

const theme: DefaultTheme = {
  colors: {
    primaryColor,
    primaryBlue,
    secondaryColor,
    secondaryDark,
    darkColor,
    lightColor,
    accentColor,
    accentBlue,
    primary: 'hsl(345deg 76% 67%)',
    secondary: 'hsl(233,47%,7%)',
    background: 'hsl(244deg 33% 51%)'
  },
  breakpoints,
  fonts: {
    body: '"Be Vietnam Pro", sans-serif'
  },
  sizes: {
    fs600: '6rem',
    fs800: '8rem',
  },
  flow: 'column',
  big: true
}


export default theme;