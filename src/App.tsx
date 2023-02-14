import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


interface State{
  musics: Music[];

}

interface Music{

  id: number;
  name: string;
  realase_year: number;

}


class App extends Component<{},State>{

constructor(props:{}){
  super(props);

  this.state={
    musics: [],
  }
}

async loadMusics(){
let response= await fetch('http://localhost:3000/music');
let data=await response.json() as Music[];
this.setState({
  musics: data,
})
}

componentDidMount(){
  this.loadMusics();

}

render(){
  
  
  
  
  return <div>

  <ul>
    {
      this.state.musics.map(music=> <li>{music.name} {music.realase_year}</li>)
    }
  </ul>
  </div>
}

}

export default App;
