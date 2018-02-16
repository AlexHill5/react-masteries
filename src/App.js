import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Tasks'
import Completed from './Completed'

class App extends Component {
  constructor(){
    super();
    this.state={
      tasks: [],
      completed: [],
      scratch: false,
      hidden: false,
      
    }
    this.submitTask = this.submitTask.bind(this)
    this.removeTask = this.removeTask.bind(this)
    this.CompleteTask = this.CompleteTask.bind(this)
  }


  submitTask(param){
    this.setState({
      tasks: [...this.state.tasks, param],
      hidden: false
    })
    console.log('all', this.state.tasks)
    
  }

  removeTask(id){
    console.log('all tasks id', this.state.tasks)
    var updatedArr = this.state.tasks.filter((index, i) => {
      return i !== id
    })
    console.log('new', updatedArr)
    this.setState({
      tasks: updatedArr
    })
  }

  CompleteTask(id){
    var complete = this.state.tasks.map((element, i) =>{
      if ( i === id ){
        this.state.tasks.splice(i, 1);
        return element
      } else return null
    })  
    this.setState({
      completed: [...this.state.completed, complete],
      scratch: true,
    })
    console.log('completed', this.state.completed)
  }


  render() {

    var buttonStyle = {
      'textDecoration': 'line-through'
    }
    var data = this.state.tasks.map((task, id)=> {
      return (
        <div>
        <li key={id}> {task} <button onClick={()=> this.CompleteTask(id)}> Complete </button> <button onClick={()=> this.removeTask(id)}> Remove </button> </li> 
      </div>
      )
    })

    var test = this.state.completed.map((item, index) => {
  if(this.state.scratch){
      return (
        <div> 
        <li style={buttonStyle}> {item} </li>
        </div>
      )
      } else return (   
      <div>
        <li> {item} </li>
      </div>
      )
    })

    // var completeItems = this.state.completed.map((items, id))
    return (
      <div className="App">
        <div className='task-container'> 
          <h1>TASKS</h1>
          <Input submit={this.submitTask}/>
          {data}
          
        </div>

        <div className='task-container'> 
          <h1> COMPLETED </h1>
          <Completed  />
          {test}
        
        </div>

      </div>
    );
  }
}

export default App;
