import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`



  :root {
    --colorPrimary: black;
    --colorLight: white;
    --colorSecondary: rgb(231, 231, 231);
    --colorEmphasis: rgb(94, 94, 94);
  }

  html, body {
        background-color: var(--colorSecondary);
        
    }
  /* Scroll Bar */
  ::-webkit-scrollbar {
  width: 10px;
  height: 0px;
}
::-webkit-scrollbar-track {
  background: none;

    }
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;

}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

`;

export default GlobalStyle;
