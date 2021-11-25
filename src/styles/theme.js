import { createTheme } from '@material-ui/core/styles';

const colorTheme = createTheme({
  palette: {
    primary: {
      white: '#ffffff',
      main: '#1e0447',
      black: '#000000',
      transparentText: 'rgba(255, 255, 255, 0.5)',
      pinkColor: '#b255cc',
      light: '#f9f9f9',
    },
    secondary: {
      main: '#5E35B1',
      light: '#e0e0e0',
      blue: '#1de9b6',
    },
  },
});
export default colorTheme;
