import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import { CartProvider } from './contextSample/CartContext';
import mainReducer from './redux/reducers'

const root = ReactDOM.createRoot(document.getElementById('root'));

// const store = createStore(favoriteReducer);
// const store = createStore(todoReducer);
 const store = createStore(mainReducer);


root.render(
    <BrowserRouter>
        <Provider store={store}>
            <CartProvider>
                <App></App>
            </CartProvider>
        </Provider>
    </BrowserRouter>

);
