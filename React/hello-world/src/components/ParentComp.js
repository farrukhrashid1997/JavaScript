import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Farrukh'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Farrukh'
            })
        },2000)
    }
    
    render() {
        console.log('*********************Parent Component Render*************************')
        return (
            <div>
                Parent Component
                 <MemoComp name={this.state.name}></MemoComp>
                {/* <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp
