import GlobalStyle from './styles/GlobalStyle';
import { Reset } from 'styled-reset';
import Router from './router/Router';
import { IssuesProvider } from './context/IssuesContext';
import { MarkdownProvider } from './context/MarkdownContext';
function App() {
  return (
    <IssuesProvider>
      <MarkdownProvider>
        <Reset />
        <GlobalStyle />
        <Router />
      </MarkdownProvider>
    </IssuesProvider>
  );
}

export default App;
