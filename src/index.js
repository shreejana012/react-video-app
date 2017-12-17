import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {store} from './stores/store';
import {Provider} from 'react-redux';
import App from './components/App';
// Creata a new component.This component produce some HTML
// Take this component's generated HTML and put it
// On the page (in the DOM)

ReactDOM.render(
<Provider store = {store}>
  <App />
</Provider>, document.querySelector('.container'));
// ReactDOM.render(<App />, document.querySelector('.container'));
