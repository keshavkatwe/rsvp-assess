import { useRoutes } from 'react-router-dom';
import Home from './pages/home/Home';
import Registration from './pages/registration/Registration';

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
  ]);
}

export default App;
