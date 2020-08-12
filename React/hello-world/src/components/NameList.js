import React from 'react'
import Person from './Person.js'

function NameList() {
    const newNames = ['Farrukh', 'Hamdan', 'Farrukh']
    const names = [
        {
            name:'Farrukh',
            id:'1'
        },
        {
            name:'Hamdan',
            id:'2'
        },
        {
            name:'Mohib',
            id:'3'
        },
        {
            name:'Faham',
            id:'4'
        },
        ]


    const newnameList = newNames.map((name,index) => <h2 key = {index}>{name} and {index}</h2>) 
    return<div>{newnameList}</div>
    
}

export default NameList
