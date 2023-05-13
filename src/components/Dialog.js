import React, { useState } from 'react'

function Dialog(props) {
    const [num,setNum] = useState(true);

    const closeF = () => {
        setNum(!num)
        //console.log(num)
    }
    
  return (
    <div className='dialog'>
        <div>
            <button className='btnc' onClick={closeF}>Dialog</button>
        </div>
        <div className={num?'real-dialog-show':'not-show'}>
            real-dialog-showreal-dialog-showreal-dialog-showreal-dialog-show
        </div>
    </div>
  )
}

export default Dialog