import React from 'react'

function MemoComp({name}) {
    console.log('Rendering the memo Comp')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
