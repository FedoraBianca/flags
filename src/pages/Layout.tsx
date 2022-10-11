import React, { useState } from 'react';
import Header from '../components/Header';
import { GlobalStyles } from '../styles/GlobalStyles.style';
import { themes } from '../styles/Theme.style';
import { ThemeProvider } from 'styled-components';
import { PageWrapper } from './Layout.style';

export interface ILayout {
  children?: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({
  children = null,
}) => {
  const [selectedTheme, setSelectedTheme] = useState(themes.light);

  const handleThemeSwitch = () => {
    setSelectedTheme(selectedTheme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeProvider  theme={selectedTheme}>
      <GlobalStyles />
      <Header onThemeSwitch={handleThemeSwitch} />
      <PageWrapper>
        {children}
      </PageWrapper>
    </ThemeProvider >
  );
};

export default Layout;
