import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';
import theme from './styles/theme';
import Pattern from './components/styled/Pattern';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Pattern />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App; 