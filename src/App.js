import { GlobalStyles } from './styles/common';
import { IssueProvider } from './contexts/IssueContext';
import Router from './router/Router';

const App = () => {
  return (
    <>
      <IssueProvider>
        <GlobalStyles />
        <Router />
      </IssueProvider>
    </>
  );
};

export default App;
