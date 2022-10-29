import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IssuesPage from './pages/Issues';
import { GlobalStyles } from './styles/common';

const App = () => {
  
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IssuesPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
