import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
//import { v4 as uuidv4 } from "uuid";
import axios from 'axios';
import './App.css';

// // https://jsonplaceholder.typicode.com/ Great for learning rest APIs
// <Todos /> embeds the Todos.js App component

class App extends Component {

    state = {
        todos: []
            
        
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => this.setState({ todos: res.data }))
    }
/*{
            id: uuidv4(),
            title: 'Take out trash',
            completed: false
        },
        {
            id: uuidv4(),
            title: 'Dinner with wife',
            completed: false
        },
        {
            id: uuidv4(),
            title: 'Meeting with boss',
            completed: false
        }*/

    // Toggle Complete
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        });
    }

    // Delete Todo
    delTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })); 
        
    }

    //Add Todo 'npm install uuid'
    addTodo = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos',
            {
                title,
                completed: false
            })
            .then(res => this.setState({ todos:
            [...this.state.todos, res.data] }));
        /*const newTodo = {
            id: uuidv4(),
            title,
            completed: false
        }*/
    }
    render() {
        //console.log(this.state.todos)
        
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo} />
                                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                            </React.Fragment>
                        )} />
                        <Route path="/about" component={About} />
                        
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;


    /**/

  //console.log(this.state.todos)
  

