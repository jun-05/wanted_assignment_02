import { Route, Routes } from 'react-router-dom';
import './index.css';
import MainPage from './pages/MainPage';
import Layout from './component/common/Layout';
import DetailPage from './pages/DetailPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:issueNumber" element={<DetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
