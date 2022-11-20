import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/AppComponent/App';
import { BackgroundComponent } from './Components/BackgroundComponent/BackgroundComponent';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <App />
        <BackgroundComponent />
    </React.Fragment>
);