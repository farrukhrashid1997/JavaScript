import React, { useState, useEffect } from 'react'
import axios from "axios"

function DataFetchingOne() {

    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://jsonplaceholdr.typicode.com/posts/1')
        .then(response=>{
            setPosts(response.data)
            setLoading(true)
        })
        .catch(error => {
            setLoading(false)
        })
        
    }, [])

    return (
        <div>
          {loading ? posts.title : null}
        </div>
    )
}

export default DataFetchingOne
