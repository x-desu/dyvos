
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import your components
import HomePage from './components/HomePage';
import { RootLayout } from './Layout/RootLayout';
import Errorboundary from './Components/Errorboundary';
import AboutPage from './Components/About';

// Define the routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement:<Errorboundary/>,
    children:[
        {path:'/',
            element:<HomePage/>
        },
        {
          path:'/about',
          element:<AboutPage/>
        }
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
