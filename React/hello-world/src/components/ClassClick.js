import React, { Component } from 'react'

class classClick extends Component {
    clickHandler(){
        console.log("Class Click")
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Class Click</button>
            </div>
        )
    }
}

export default classClick
