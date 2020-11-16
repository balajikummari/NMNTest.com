import { grey } from '@material-ui/core/colors';
import { createMuiTheme,responsiveFontSizes  } from '@material-ui/core/styles';


// Create a theme instance.

let theme = {
  typography: {
    fontFamily: [
      'Latog',
      'sans-serif',
    ].join(','),
  },
  palette: {
    
    primary: {
      main: '#0988C8',
    },
    secondary: {
      main: '#19857b',
    },

    typography: {
      button: {
        textTransform: 'none'
      }
    }
    
  }
}

 //theme = responsiveFontSizes(theme);


export const darkTheme = createMuiTheme({
  ...theme,
  palette:{
    ...theme.palette,
    type:'dark',
    background:{
      paper:grey[900],
      default:'black'
    }
  }
})

export const lightTheme = createMuiTheme({
  ...theme,
  palette:{
    ...theme.palette,
    type:'light'
  }
})


