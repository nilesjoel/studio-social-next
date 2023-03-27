import { DefaultTheme } from 'styled-components'

const primaryColor = "rgb(250,240,230)";
const secondaryColor = 'rgb(90 85 85)';
const secondaryDark = 'rgb(175 167 159)';
const darkColor = "brown";
const primary = 'hsl(345deg 76% 67%)';
const secondary = 'hsl(233,47%,7%)';
const background = 'hsl(244deg 33% 51%)';


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
    secondaryColor,
    secondaryDark,
    darkColor,
    primary,
    secondary,
    background
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