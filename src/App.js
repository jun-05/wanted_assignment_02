import GlobalStyle from './styles/GlobalStyle';
import { Reset } from 'styled-reset';
import Router from './router/Router';
import { IssuesProvider } from './context/IssuesContext';
function App() {
  return (
    <IssuesProvider>
      <Reset />
      <GlobalStyle />
      <Router />
    </IssuesProvider>
  );
}

export default App;
