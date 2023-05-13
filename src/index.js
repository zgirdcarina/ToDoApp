import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';

// Import the Provider and store from the Redux library
import {Provider} from 'react-redux';
import store from './redux/store';

// Render the App component wrapped in the ChakraProvider component for styling
// and the Provider component for accessing the Redux store
ReactDOM.render(
    <Provider store={store}>
        <ChakraProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ChakraProvider>
    </Provider>,
    document.getElementById('root')
);
