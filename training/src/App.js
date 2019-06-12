import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Welcome to react training
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(props){
    // console.log("inside constructor")
    super(props);
    this.state = {
      count:0,
      title: 'Welcome to react training',
      showTimer:false
    }  
    this.increment = this.increment.bind(this);
  }
  
  handleTitleChange = (e) =>{
    this.setState({title: e.target.value})
  }
  
  // componentDidMount(){
  //   console.log("componentDidMount get called");
  // }
  // 
  // static getDerivedStateFromProps(props, state){
  //   console.log("getDerivedStateFromProps get called");
  // }
  // 
  // 
  // 
  // shouldComponentUpdate(){
  //   console.log("shouldComponentUpdate get called");
  //   return true;
  // }
  // 
  // componentDidMount(){
  //   console.log("componentDidMount get called");
  // }
  // 
  // componentDidUpdate(){
  //   console.log("componentDidUpdate get called");
  // }
  
  increment(){
    this.setState({count: this.state.count + 1})
    localStorage.setItem('count', this.state.count);
  }
  
// this.setState({count: this.state.count + 1})
  render(){
    // console.log("render getting called")
    return(
      <div className="App">
        <header className="App-header">
          {this.state.title+ ' '+ this.state.count}
          <br/>

          <button onClick={()=>this.increment()}>Increment</button>
          <button onClick={() => this.setState({showTimer:!this.state.showTimer})}>{!this.state.showTimer?"Start":'Stop'}</button>
          {this.state.showTimer && <Child 
            count={this.state.count}
            increment={this.increment}/>}
          <br/>

          <input type="text" onChange={e => this.handleTitleChange(e)}/>
        </header>
      </div>
    )
  }
}


export default App;
