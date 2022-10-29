import { Route, Routes } from 'react-router-dom';
import './index.css';
import MainPage from './pages/MainPage';
import Layout from './component/common/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
