import React, { Component } from 'react';
import './App.css';
import  Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';


class App extends Component {

  constructor(props){
    super(props) ;
    this.state={
      deadline:'January 3,2019',
      newdeadline:''
    }

    this.changeDeadline = ()=>{
      this.setState({deadline:this.state.newdeadline})
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Apptitle">Countdown to a {this.state.deadline }</div>
          <Clock deadline={this.state.deadline}/>
        <Form inline>
          <FormControl placeholder='new date' onChange={event => (this.setState({ newdeadline: event.target.value}))}/>
          <Button onClick={()=> this.changeDeadline()}>Submit</Button>
        </Form>

      </div>
    );
  }
}

export default App;

