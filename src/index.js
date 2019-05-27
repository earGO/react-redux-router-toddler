import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from './reducers/reducers';

/*import {createStore} from "redux";

function playList(state=[],action) {
    if(action.type === "ADD_TRACK"){
      return [
          ...state,
          action.payload
      ];
    }
    return state
}

const store = createStore(playList);

const trackList = document.querySelectorAll('.track-list')[0];
const addTrackButton = document.querySelectorAll('.add-track')[0];
const trackInput = document.querySelectorAll('.track-input')[0];

console.log(store.getState());

store.subscribe(()=>{
    trackList.innerHTML='';
    trackInput.value = '';
    store.getState().forEach(track=>{
        const li = document.createElement('li');
        li.textContent = track;
        trackList.appendChild(li);
    })
});

addTrackButton.addEventListener('click',()=>{
    const trackName =trackInput.value;
    store.dispatch({type:'ADD_TRACK',payload:trackName});
})*/


const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>
   , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
