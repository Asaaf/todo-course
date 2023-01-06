import React from 'react';
import ReactDOM from 'react-dom/client';
import AppController from './Components/AppComponent/AppController';
import { BackgroundController } from './Components/BackgroundComponent/BackgroundController';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <AppController />
        <BackgroundController />
    </React.Fragment>
);