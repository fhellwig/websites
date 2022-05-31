const darkTheme = {
  bgcolor: '#222222',
  fgcolor: 'white',
  hrefcolor: 'yellow',
  marginal: {
    bgcolor: 'darkBlue',
    fgcolor: 'white'
  }
};

const lightTheme = {
  bgcolor: '#cccccc',
  fgcolor: 'black',
  hrefcolor: 'blue',
  marginal: {
    bgcolor: 'dodgerBlue',
    fgcolor: 'white'
  }
};

export const DARK = 'dark';
export const LIGHT = 'light';

const themes = {};

themes[DARK] = darkTheme;
themes[LIGHT] = lightTheme;

const defaultTheme = themes[LIGHT];

export function getTheme(theme) {
  return themes[theme] || defaultTheme;
}
