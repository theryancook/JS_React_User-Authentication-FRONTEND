import React from 'react'
import axios from 'axios'

class TodoList extends React.Component {
    state = {
        todoText: '',
        todos:  []
    }

    componentDidMount(){
        this.getTodos()
    }

    getTodos = async () => {
        axios.defaults.headers.common = {'Authorization': `Bearer ${this.props.userToken}`}
        const todoRes = await axios.get('https://aqueous-inlet-10710.herokuapp.com/todos')
        this.setState({todos: todoRes.data})
    }

    createTodo = async() => {
        const newTodoRes = await axios.post('https://aqueous-inlet-10710.herokuapp.com/todos', {todo: {
            title: this.state.todoText,
            finished: false
        }})
        this.setState({todos: [newTodoRes.data, ...this.state.todos]})
    }

    render(){
        return (
            <div>
                <input 
                    type="text"
                    value={this.state.todoText}
                    onChange={(e) => this.setState({todoText: e.target.value})}
                />
                <button onClick={this.createTodo}>Create Todo</button>
        	{this.state.todos.map(todo => <li>{todo.title}</li>)}
            </div>
        )
    }
}

export default TodoList