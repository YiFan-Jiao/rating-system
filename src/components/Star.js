import React from 'react';
import { FaStar} from 'react-icons/fa'

function Star(props) {
   
    //console.log(count)

    const changeText = () => {
        //console.log(props.statsNum)
            /* 
            • The Star component has a onclick attribute that calls a function 
            that is passed to it as a prop. (from StarRating). 

            I don't know what to do to pass the value to the child component, 
            */
    }

  return (
    <>
        <FaStar onClick={changeText} />
    </>
  )
}

export default Star