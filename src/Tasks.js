import React, { Component } from 'react';

class Tasks extends Component {
    constructor(){
        super();
        this.state={
            input: '',
            disable: true
        }
        this.userInput = this.userInput.bind(this)
        this.clearInput = this.clearInput.bind(this)
    }
    
  userInput(e){
    this.setState({
      input: e.target.value,
      disable: false
    })
    console.log('input', this.state.input)
  }

  clearInput(){
      this.setState({
        input: '',
        disable: true
      })
       this.props.submit(this.state.input) 

  }

    render() {

        return (
            <div>
               <input placeholder='Enter Tasks' onChange={this.userInput} value={this.state.input} />
                <button onClick= { this.clearInput } disabled={this.state.disable}  > Add Task </button> 
                
            </div>
        );
    }
}

export default Tasks;