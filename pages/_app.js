import '../styles/index.scss'
import Layout from '../components/Layout'
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#E8B4B8',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#EED6D3',
    },
  },
});

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
}

export default MyApp