import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    focusInput(){
        this.inputRef.current.focus()
    }

    printSomething(){
        console.log('Lol')
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}></input>
            </div>
        )
    }
}

export default Input
