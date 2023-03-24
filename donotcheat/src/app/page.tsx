"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import {CosineSimilarity,cosineSimilarityfunc,getColor} from './utils'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [text,setText]=useState('')
  const [text1,setText1]=useState('')
  const [simvalue,setSimValue]=useState<number|null>(null)
  const [width,setWidth]=useState<number|null>(null)
  //const cosSim = new CosineSimilarity(text1, text2);

  function runCheck(){
 
    const cosSim = cosineSimilarityfunc(text, text1);
    console.log(cosSim)
    if(cosSim*100==0){
  setWidth(3)
    }else{



    setWidth(cosSim*100)    }
    setSimValue(cosSim*100)
  }
  return (
    <div className='myapp' >
      <div className="top">
        <h1>CodeMatch: A Cosine Similarity-Based Code Comparison Tool</h1>
        <button onClick={()=>runCheck()}>Check</button>
      </div>
      
      {
        width&&


      <div className="resultbox">
        <div className="result" style={{ width: `${width}%`, backgroundColor: getColor(simvalue) }}>
        {simvalue?.toFixed(1)}
        </div>

      </div>
            }
      <div className="content">
        <textarea contentEditable={false} value={text}onChange={(e)=>setText(e.target.value)} ></textarea>
        <textarea contentEditable={false} value={text1} onChange={(e)=>setText1(e.target.value)}></textarea>
      </div>
    </div>

  )
}
