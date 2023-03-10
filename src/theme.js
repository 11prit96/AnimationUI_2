import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#181818",
      light: "#343434",
      dark: "#050a0b",
    },
    secondary: {
      main: "#b8ef1f",
      light: "#b5e065",
      dark: "#82b440",
    },
    text: {
      main: "#e6e6e6",
      light: "#e9edf5",
      dark: "#717171",
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
