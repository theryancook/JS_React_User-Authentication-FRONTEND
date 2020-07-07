import React from 'react'

class Signup extends React.Component {

    state = {
        email: "",
        password: ""
    }

    render(){
        return (
            <div>
                <input
                    placeholder="Email"
                    type="text"
                    value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value})}
                />
                <input
                    placeholder="Password"
                    type="password"
                    value={this.state.password}
                    onChange={(e) => this.setState({password: e.target.value})}
                />
                <button onClick={() => {
                    this.props.onSubmit(this.state.email, this.state.password)
                }}>
                    Signup
                </button>
            </div>
        )
    }
}

export default Signup