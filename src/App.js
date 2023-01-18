import React from 'react';
import logo from './logo.svg';
import Input from './components/Input';
import TodoItem from './components/TodoItem';
import EditModal from './components/EditModal';
import './App.css';

class App extends React.Component {
  state = {
    todos: [{
      id: 1,
      title: "Title"
    }
  ],
isEdit: false,
editData : {
  id : "",
  title : ""
}
  }

  update = () =>{
    const { id, title} = this.state.editData
    const newData  = {id, title}
    const newTodos = this.state.todos
    newTodos.splice((id-1), 1, newData)
    this.setState({
      todos: newTodos,
      isEdit: false,
      editData:{
        id: "",
        title: ""
      }
    })
  }

  setTitle = e => {
    this.setState({
      editData:{
        ...this.state.editData,
        title: e.target.value
      }
    })
  }
//buka tutup edit jika di klik button edit
openModal = (id, data) =>{
  this.setState({
    isEdit: true
    ,editData :{
      id,
      title: data
    }
  })
}

closeModal = () =>{
  this.setState({
    isEdit: false
  })
}

// Hapus data
  deleteTask = id => {
   this.setState({
    todos: this.state.todos.filter(item => item.id !=id)
   })
  }

  // add data
  addTask = data => {
    const id = this.state.todos.length
    const newData = {
      id: id + 1,
      title: data
    }
    this.setState({
      todos: [...this.state.todos, newData]
    })
  }
  render(){
    const {todos} = this.state;
  return (
    <div className="app">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h3>Task List</h3>
      </div>
      <div className="list">
        {todos.map(item =>
          <TodoItem key={item.id} todo={item} del={this.deleteTask} 
          open={this.openModal}
          />
          )}
      </div>
      <div>
        <div className="input-form">
          <Input add = {this.addTask}/>
        </div>
      </div>
      <EditModal edit={this.state.isEdit} close={this.closeModal} change={this.setTitle}
      data = {this.state.editData}
      update={this.update}
      />
    </div>
  );
}
}
export default App;
