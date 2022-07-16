import { useRoutes } from 'react-router-dom';
import Home from './pages/home/Home';
import Registration from './pages/registration/Registration';
import Reports from './pages/reports/reports';

function App() {
  return useRoutes([
    {
      path: '/',
      element: <Registration />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/reports',
      element: <Reports />,
    },
  ]);
}

export default App;
