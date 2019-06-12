import React, {Component} from 'react';


class Child extends Component {
  
  
  componentDidMount(){
    console.log("mounting");
    
    this.setState({time:this.props.count})
  }
  
  
  // componentDidMount(){
  //   console.log("componentDidMount get called");
  // }
  // 
  static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromProps get called");
  }
  
  
  
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate get called");
    return true;
  }
  
  // componentDidMount(){
  //   console.log("componentDidMount get called");
  // }
  
  componentDidUpdate(){
    console.log("componentDidUpdate get called");
      if(this.props.count !== this.state.time)
      this.setState({time:this.props.count})
  }
  componentWillUnmount(){
    console.log("Unmounting");
  }
  
  
  
  render(){
    console.log(this.props);
    

    return(
      <div>
        <div>Hi this is the child{this.props.count}</div>


      </div>
    )
  }
}

export default Child;