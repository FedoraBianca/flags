import { createGlobalStyle } from "styled-components";
import './icomoon.css';

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Nunito Sans', sans-serif !important;
}

h1, h2, h3, h4, h5, p, span {
  font-family: 'Nunito Sans', sans-serif !important;
}
`