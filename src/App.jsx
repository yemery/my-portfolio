import './App.css'
// import { BrowserRouter as Router } from 'react-router-dom';
// import AppRouter from './routes/AppRouter';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AppLayout from './templates/AppLayout';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout/>,
      errorElement: <NotFound />,
      children: [  
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        
        {
          path: '/projects',
          element: <Projects />
        },
        // {
        //   path: '/products/:productId',
        //   element: <Home />
        // }
      ]
    }
  ])
  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App
