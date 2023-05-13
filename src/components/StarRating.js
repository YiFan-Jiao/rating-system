import React, { useEffect, useRef, useState } from 'react';
import Star from './Star'

function StarRating() {
    const [statsNum, setSColor] = useState(0);  
    let [texts, setTexts] = useState("Let's score");  

    const realNum = useRef()
    useEffect(()=>{
        realNum.current = statsNum;
        if(realNum.current === 0) {
            setTexts(texts = "Let's score")
        }
        if(realNum.current === 1) {
            setTexts(texts = 'One good')
        }
        if(realNum.current === 2) {
            setTexts(texts = 'Two good')
        }
        if(realNum.current === 3) {
            setTexts(texts = 'Three good')
        }
        if(realNum.current === 4) {
            setTexts(texts = 'Four good')
        }
        if(realNum.current === 5) {
            setTexts(texts = 'Five good')
        }
    },[statsNum])
    
    const changeColor = (event) => {
        const starClassName = event.target.parentNode.parentNode.className;
        if(starClassName === 'stars-yellow' && statsNum>=0) {
            setSColor(statsNum - 1)
        } 
        if(starClassName === 'stars-gray') {
            setSColor(statsNum + 1)
        } 
    }

  return (
    <div className='container grid big-box'>
        <div className='grid stars-list'>
            {[...new Array(5)].map((e,i,) => (
                <div className={statsNum>i?'stars-yellow':'stars-gray'} key={i} onClick={changeColor} >
                    <Star statsNum={statsNum}/>
                </div>
            ))}
        </div>
        <div className='grid star-words'>
            <h2>{texts}</h2>
        </div>
    </div>
  )
}

export default StarRating