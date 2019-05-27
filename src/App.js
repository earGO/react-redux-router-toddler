import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";

import { getTracks } from './actions/tracks';


class App extends Component {
    addTrack(){
        console.log('add track clicked',this.trackInput.value);
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    };

    findTrack(){
        console.log('search track clicked',this.searchInput.value);
        this.props.onFindTrack(this.searchInput.value);
        this.searchInput.value = '';
    }

  render() {
        console.log(this.props.testStore)
    return(
        <div className={'container'}>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div>
                <input type="text" className="track-input" ref={(input)=>{this.trackInput = input}}/>
                <button className="add-track" onClick={this.addTrack.bind(this)}>Add track</button>
            </div>
            <div>
                <input type="text" className="track-input" ref={(input)=>{this.searchInput = input}}/>
                <button className="add-track" onClick={this.findTrack.bind(this)}>Find track</button>
            </div>
            <div>
                <button className="get-tracks" onClick={this.props.onGetTracks}>Get track</button>
            </div>
            <ul className="track-list">
                {this.props.tracks.map((track,key)=>{
                    return <li key={key}>{track.name}</li>
                })}
            </ul>
        </div>
    );
  }
}

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
