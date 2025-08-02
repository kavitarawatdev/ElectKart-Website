import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Applayout } from './layout/Applayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { IndProduct } from './pages/IndProduct';
import { Contact } from './pages/Contact';
import { Search } from './pages/Search';
import { Cart } from './pages/Cart';
import { Products } from './pages/Products';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    errorElemet:<Error/>,
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
      {
        path:'/search',
        element:<Search/>
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
