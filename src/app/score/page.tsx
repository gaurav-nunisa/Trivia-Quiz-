"use client"
import ScoreCounter from "../store/scoreCounter";

import React from 'react'

const ScorePage = () => {
    const {score} = ScoreCounter();


  return (
    <div>
        <h1 className="text-3xl font-bold text-center mt-10">Your score is : {score}</h1></div>
  )
}

export default ScorePage