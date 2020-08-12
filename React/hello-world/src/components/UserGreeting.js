import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
        return (
            this.state.isLoggedIn ? 
            <div>Welcome Farrukh</div>:
            <div>Welcome Guest</div>
        )

        // let message 
        // if (this.state.isLoggedIn){
        //     message = <div>Welcome Farrukh!</div>
        // } else {
        //     message = <div>Welcome Guest!</div>
        // }

        // return <div>{message}</div>

        // if(this.state.isLoggedIn){
        //     return <div>Welcome Farrukh!</div>
        // }

        // else{
        //     return <div>Welcome Guest!</div>
        // }



        
            // <div>
            //     <div>Welcome Farrukh!</div>
            //     <div>Welcome Guest!</div>
            // </div>
        
    }
}

export default UserGreeting
