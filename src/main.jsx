import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import { DataProvider } from './context/productContext.jsx'
import { FilterProvider } from './context/filterContext.jsx'
import { CartProvider } from './context/cartContext.jsx'

const domain=import.meta.env.VITE_AUTH_DOMAIN;
const clientId=import.meta.env.VITE_AUTH_CLIENT_ID;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
         <DataProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </DataProvider>
     
    </Auth0Provider>
  </StrictMode>,
)
