import { useRoutes } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
  ]);
}

export default App;
