import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IssuesPage from './pages/Issues';
import DetailsPage from './pages/IssueDetail';
import { GlobalStyles } from './styles/common';
import { IssueProvider } from './contexts/IssueContext';

const App = () => {
  return (
    <>
      <IssueProvider>
      <GlobalStyles />
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
