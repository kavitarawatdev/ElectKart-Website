import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  { DataProvider } from './context/productContext.jsx'
import { FilterProvider } from './context/filterContext.jsx'
import { CartProvider } from './context/cartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <FilterProvider>
        <CartProvider>
           <App />
        </CartProvider> 
      </FilterProvider>
    </DataProvider>
  </StrictMode>,
)
