import React, { useState } from 'react';
// import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';
import { GlobalStyle } from '../styles/global-style';
import Container from '../components/Container';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Component {...pageProps} toggleTheme={toggleTheme} theme={theme} />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
