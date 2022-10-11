import React, { useState } from 'react';
import Header from './components/Header';
import { GlobalStyles } from './styles/GlobalStyles.style';
import { ThemeProvider } from "styled-components";
import { themes } from './styles/Theme.style';

function App() {
  const [selectedTheme, setSelectedTheme] = useState(themes.light);

  const handleThemeSwitch = () => {
    setSelectedTheme(selectedTheme === themes.light ? themes.dark : themes.light);
  };
  
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Header onThemeSwitch={handleThemeSwitch}/>
    </ThemeProvider>
  );
}

export default App;
