import { useRoutes } from 'react-router-dom';
import Home from './pages/home/Home';
import Registration from './pages/registration/Registration';
import Search from './pages/search/search';

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
      path: '/search',
      element: <Search />,
    },
  ]);
}

export default App;
