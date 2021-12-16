import { createTheme } from '@material-ui/core/styles';

const colorTheme = createTheme({
  palette: {
    primary: {
      white: '#f7f7f7',
      main: 'rgb(35, 9, 57)',
      black: '#000000',
      transparentText: 'rgb(193, 186, 235);',
      pinkColor: '#b255cc',
      light: '#f9f9f9',
    },
    secondary: {
      main: '#5E35B1',
      light: '#cccccc',
      blue: 'rgb(0, 182, 180);',
    },
  },
  typography: {
    fontFamily: [
      '"Montserrat"',
      '"Lato"',
      '"Nunito Sans"',
      'sans-serif',
    ].join(','),
  },
});
export default colorTheme;
