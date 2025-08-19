import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Applayout } from './layout/Applayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { IndProduct } from './pages/IndProduct';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';
import { Products } from './pages/Products';
import { ErrorPage } from './pages/Error';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/products',
        element:<Products/>
      },
      {
        path:'/indProduct/:id',
        element:<IndProduct/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
    ]
  }
]);

function App() {

  return (
    <>
    <RouterProvider router={router}>
    </RouterProvider>    
    </>
  )
}

export default App
