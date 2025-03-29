import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';
import theme from './styles/theme';
import Pattern from './components/styled/Pattern';
import Header from './components/Header';
import Footer from './components/Footer';
import Privacy from './pages/privacy';

// Pages
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Pattern />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App; 