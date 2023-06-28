import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import DigmonMain from './pages/DigmonMain';
import DigmonDetails from './pages/DigmonDetails';

function App() {

  const routes = createBrowserRouter([
    {
      path:'/',
      element:<DigmonMain/>
    },
    {
      path:"/:id",
      element:<DigmonDetails/>
    }
  ])

  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
