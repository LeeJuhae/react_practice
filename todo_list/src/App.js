import React from 'react';
import ToDoForm from './component/ToDoForm.js';
import ToDoList from './component/ToDoList.js';
import './App.css';

class App extends React.Component {
  id = 1;
  state = {
    toDoList: [],
    search: '',
  }
  handleCreate = (data) => {
    const {toDoList} = this.state;
    this.setState({
      toDoList: toDoList.concat({
        id: this.id++,
        ...data,
      })
    })
  }
  handleUpdate = (id, data) => {
    const {toDoList} = this.state;
    this.setState({
      toDoList: toDoList.map((toDoList) => {
        if (toDoList.id === id){
          return {
            id,
            ...data,
          };
        }
        return toDoList;
      })
    })
  }
  handleRemove = (id) => {
    const {toDoList} = this.state;
    this.setState({
      toDoList: toDoList.filter((data) => data.id !== id),
    })
  }
  handleSearch = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    const {toDoList, search} = this.state;
    return (
      <div>
        <ToDoForm onCreate={this.handleCreate}/>
        <input value={search} name="search"
        onChange={this.handleSearch} placeholder="검색"></input>
        { toDoList.length === 0?
        <ToDoList data={toDoList}
          onUpdate={this.handleUpdate}
          onRemove={this.handleRemove}/>
          :
        <ToDoList
        data={
          toDoList.filter((data) => data.text.indexOf(search) !== -1)}
        onUpdate={this.handleUpdate}
        onRemove={this.handleRemove}
        />
        }
      </div>
    )
  }
}

export default App;
