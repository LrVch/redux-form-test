import React from 'react';
import ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-touch-backend'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import './index.css';
import App from './App';
import {
  isMobile
} from "react-device-detect";

const { store } = configureStore()

const AppBundle = (
  <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
    <Provider store={store}>
      <App />
    </Provider>
  </DndProvider>
)

ReactDOM.render(
  AppBundle,
  document.getElementById('root')
);
