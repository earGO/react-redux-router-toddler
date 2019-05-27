import React from 'react';
import './App.css';
import { connect } from "react-redux";

import { getTracks } from './actions/tracks';
import Menu from "./components/Menu/Menu";


const App = ({tracks,onAddTrack,onFindTrack,onGetTracks}) => {
    let trackInput = '',
        searchInput = '';

    const addTrack = () =>{
        console.log('add track clicked',trackInput.value);
        onAddTrack(trackInput.value);
        trackInput = '';
    };

    const findTrack = () => {
        console.log('search track clicked',searchInput.value);
        onFindTrack(searchInput.value);
        searchInput = '';
    }

    return(
        <div className={'container'}>
            <Menu/>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div>
                <input type="text" className="track-input" ref={(input)=>{trackInput = input}}/>
                <button className="add-track" onClick={addTrack}>Add track</button>
            </div>
            <div>
                <input type="text" className="track-input" ref={(input)=>{searchInput = input}}/>
                <button className="add-track" onClick={findTrack}>Find track</button>
            </div>
            <div>
                <button className="get-tracks" onClick={onGetTracks}>Get track</button>
            </div>
            <ul className="track-list">
                {tracks.map((track,key)=>{
                    return <li key={key}>{track.name}</li>
                })}
            </ul>
        </div>
    );
};

export default connect(
    state=>({
        tracks:state.tracks.filter(track=>track.name.includes(state.filterTracks))
    }),
    dispatch=>({
        onAddTrack:(name)=>{
            const payload = {
                id: Date.now(),
                name
            }
            dispatch({type:"ADD_TRACK",payload})
        },
        onFindTrack:(name)=>{
            dispatch({
                type:'FIND_TRACK',payload: name
            })
        },
        onGetTracks:()=> {
            dispatch(getTracks());
        }
    })
)(App);
