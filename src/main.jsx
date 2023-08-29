import React from 'react'

import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, queryClient } from './config/react-query.js';
import './index.css'
import store from './redux/store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {/* <React.StrictMode> */}
        <App />
        {/* </React.StrictMode> */}
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>,

)
