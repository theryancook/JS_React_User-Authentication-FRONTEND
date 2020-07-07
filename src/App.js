import React from 'react'
import Signup from './Signup'
import axios from 'axios'
import TodoList from './TodoList'

class App extends React.Component {

    state = {
        userToken: null,
        user: null
    }

    render(){
        return (
            <div>
                {this.state.user ? (
                    <TodoList userToken={this.state.userToken}/>
                ) : (
                    <Signup onSubmit={async (email, password) => {
                        const userRes = await axios.post('https://aqueous-inlet-10710.herokuapp.com/users', {user: {email, password}})
                        const tokenRes = await axios.post('https://aqueous-inlet-10710.herokuapp.com/user_token', {auth: {email, password}})
                        this.setState({
                            user: userRes.data,
                            userToken: tokenRes.data.jwt
                        })
                    }}/>
                )}
            </div>
        )
    }

}

export default App