import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import StudentCardList from './StudentCardList.js';
import { GlobalStyle, theme } from '../styles/index.js';

const MainContainer = styled.div`
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
`

const App = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <MainContainer>
          <GlobalStyle />
          <StudentCardList className="studentcard" />
        </MainContainer>
      </ThemeProvider>

    </>
  );
}

export default App;
