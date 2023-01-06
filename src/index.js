import React from 'react';
import ReactDOM from 'react-dom/client';
import AppController from './Components/AppComponent/AppController';
import { BackgroundComponent } from './Components/BackgroundComponent/BackgroundComponent';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <AppController />
        <BackgroundComponent />
    </React.Fragment>
);