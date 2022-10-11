import React, { useState } from 'react';
import Header from './components/Header';
import { GlobalStyles } from './styles/GlobalStyles.style';
import { ThemeProvider } from "styled-components";
import { themes } from './styles/Theme.style';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

function App() {
  const [selectedTheme, setSelectedTheme] = useState(themes.light);

  const handleThemeSwitch = () => {
    setSelectedTheme(selectedTheme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Header onThemeSwitch={handleThemeSwitch} />
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:country" element={<DetailPage />} />
      </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
