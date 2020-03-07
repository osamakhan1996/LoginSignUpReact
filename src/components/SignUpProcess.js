import React, { Component } from 'react'
import Signup from './Signup'

export default class SignUpProcess extends Component {
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }
   
    addUser = (user)=>{
    
        user.id = Math.random()
        let newUser = [...this.state.users, user]
        this.setState({
            users: newUser
        })
        console.log(newUser)
    
}
    render() {
        
     
        return (
            <div>
                <Signup addUser={this.addUser} />
            </div>
        )
    }
}
