import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY =  'AIzaSyDOkIHRmlpR0p2BCEvwePv8xlDP3YMo_UI';


// Creata a new component.This component produce some HTML
// Take this component's generated HTML and put it
// On the page (in the DOM)
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
ReactDOM.render(<App />, document.querySelector('.container'));
// ReactDOM.render(<App />, document.querySelector('.container'));
