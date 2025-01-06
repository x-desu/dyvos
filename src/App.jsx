
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import your components

import { RootLayout } from './layout/RootLayout.jsx';
import Errorboundary from './components/Errorboundary.jsx';


import AboutPage from './components/About.jsx';
import Homepage from './components/HomePage.jsx';

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
