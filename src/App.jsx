
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import your components

import { RootLayout } from './layout/RootLayout';
import Errorboundary from './components/Errorboundary';


import AboutPage from './components/About';
import Homepage from './components/HomePage';

// Define the routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement:<Errorboundary/>,
    children:[
        {path:'/',
            element:<Homepage/>
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
