import {createTheme} from "@mui/material";
const theme =createTheme({
      palette: {
            mode: 'light',
            primary: {
                  main: '#f55a30',
            },
            secondary: {
                  main: '#008778',
            },
            background: "#ffffff"
      },
      spacing: 8,
      direction: 'rtl',
      overrides: {
            MuiSwitch: {
                  root: {
                        width: 42,
                        height: 26,
                        padding: 0,
                        margin: 8,
                  },
                  switchBase: {
                        padding: 1,
                        '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
                              transform: 'translateX(16px)',
                              color: '#fff',
                              '& + $track': {
                                    opacity: 1,
                                    border: 'none',
                              },
                        },
                  },
                  thumb: {
                        width: 24,
                        height: 24,
                  },
                  track: {
                        borderRadius: 13,
                        border: '1px solid #bdbdbd',
                        backgroundColor: '#fafafa',
                        opacity: 1,
                        transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                  },
            },
            MuiAppBar: {
                  colorInherit: {
                        backgroundColor: '#689f38',
                        color: '#fff',
                  },
            },
      },
      props: {
            MuiAppBar: {
                  color: 'inherit',
            },
            MuiButtonBase: {
                  disableRipple: true,
            },
            MuiList: {
                  dense: true,
            },
            MuiMenuItem: {
                  dense: true,
            },
            MuiTable: {
                  size: 'small',
            },
            AppBar: {
                  color: 'secondary',
            },
      },
      shape: {
            borderRadius: 8,
      },
      typography: {
            overline: {
                  fontSize: '0.7rem',
            },
            button: {
                  fontWeight: 300,
                  fontSize: '0.8rem',
                  letterSpacing: '0.03em',
                  lineHeight: 1.91,
            },
            fontWeightLight: 200,
            fontWeightRegular: 400,
      }
});
export default theme;