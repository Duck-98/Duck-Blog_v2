import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';
import { GlobalStyle } from '../styles/global-style';
import Container from '../components/Container';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
    localStorage.setItem('theme', JSON.stringify(theme));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container toggleTheme={toggleTheme}>
        <Component {...pageProps} toggleTheme={toggleTheme} theme={theme} />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
