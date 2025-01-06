
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import your components

import { RootLayout } from './layout/RootLayout.jsx';
import Errorboundary from './components/Errorboundary.jsx';


import AboutPage from './components/About.jsx';
import Homepage from './components/Homepage.jsx'
import TermsAndConditions from './components/termscon.jsx';
import PrivacyPolicy from './components/Privacy.jsx';
import CookiesPolicy from './components/Cookies.jsx';

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
        },
        {
          path:"/terms-conditions",
          element:<TermsAndConditions/>
        },
        {
          path:"/privacy-policy",
          element:<PrivacyPolicy/>
        },
        {
          path:"/cookies",
          element:<CookiesPolicy/>
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
