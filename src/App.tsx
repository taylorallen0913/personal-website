import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { ThemeContextProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const GlobalStyle = createGlobalStyle`
body { 
  background-color: ${(props) =>
    props.theme.mode === 'dark' ? '#202020' : '#F0F0F0'};
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')} 
} 
`;

const App = (): JSX.Element => {
  return (
    <ThemeContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      <GlobalStyle />
    </ThemeContextProvider>
  );
};

export default App;
