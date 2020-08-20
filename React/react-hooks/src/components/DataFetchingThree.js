import React, { useState, useEffect, useReducer } from 'react'
import axios from "axios"


const initialState = {
    posts: {},
    loading: true
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                posts: action.payload,
                loading: true
            }
            
        
        case 'FETCH_ERROR':
            return {
                posts: {},
                loading: false
            }
    
        default:
            return state
    }
}

function DataFetchingThree() {

     const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            dispatch({type:'FETCH_SUCCESS', payload: response.data})
        })
        .catch(error => {
             dispatch({type:'FETCH_ERROR'})
        })
        
    }, [])

    return (
        <div>
          {state.loading ? state.posts.title : null}
        </div>
    )
}

export default DataFetchingThree
