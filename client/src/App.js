import React, {Component} from "react";
import "./App.css";
import Axios from "axios";
import Manager from './Components/GalleryManager'

class App extends Component {
  
  state = {
    images : [],
    num : 3,
  }
  
  // a shuffle func to randomize images order
  shuffle = (arr) => {
    let curr = arr.length, temp, random;
  
    // while there remain elements to shuffle...
    while (0 !== curr) {
  
      // pick a remaining element...
      random = Math.floor(Math.random() * curr);
      curr -= 1;
  
      // And swap it with the current element.
      temp = arr[curr];
      arr[curr] = arr[random];
      arr[random] = temp;
    }
  
    return arr;
}

  // change listener to dynnamic change num of images
  handleChangeOnNum = (event) => {
    this.setState({num : event.target.value});
  }

  componentDidMount () {    
    
    // preform a GET to the EXPESS server
    // fetches the images json
    Axios({
      method: "GET",
      url: "http://localhost:5000/",
      headers: {
        "Content-Type": "application/json"
      }
    })
    // if successful
    .then(res => {
      this.setState({
        images : res.data.images.images,
      })
    }); 
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Manager images={this.state.images} numOfImages={this.state.num}/>
          <input type="number" onChange={this.handleChangeOnNum}/>
        </header>
      </div>
    );
    
  }
}

export default App;