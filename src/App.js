import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IssuesPage from './pages/Issues';
import DetailsPage from './pages/IssueDetail_context';
import { GlobalStyles } from './styles/common';
import { IssueProvider } from './contexts/IssueContext';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <IssueProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IssuesPage />} />
            <Route path="/:id" element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
      </IssueProvider>
    </>
  );
};

export default App;
