import React , {useState, useEffect} from 'react'

function DocTitleTwo() {
    const [count, setCount] = useState(0)
    return (
        
        <div>
            <div onClick={()=>setCount(count+1)}>{count}</div>
        </div>
    )
}

export default DocTitleTwo
