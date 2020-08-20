import React , {useState} from 'react'
import useDocumentTitle from '../Hooks/useDocumentTitle'

function DocTitleOne() {
    const [count, setCount] = useState(0)
    
    console.log("rerendered")
    return (
        
        <div>
            <div onClick={()=>setCount(prevCount => prevCount + 1)}>{count}</div>
        </div>
    )
}

export default DocTitleOne
