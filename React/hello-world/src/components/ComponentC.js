import React, { Component } from 'react'
import ComponentE from './ComponentE'
import UserContext from './userContext'

export class ComponentC extends Component {
    static contextType = UserContext
    render() {
        return (
            <div>
            <div>WASUP {this.context}</div>
                <ComponentE/>
            </div>
        )
    }
}

export default ComponentC
