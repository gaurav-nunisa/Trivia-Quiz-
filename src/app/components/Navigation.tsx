"use client"

import React from 'react'
import Link from 'next/link'
import ScoreCounter from '../store/scoreCounter'

const Navigation = () => {
  const {removeAllScore}= ScoreCounter()
  return (
    <div>
        <nav className='bg-green-600'>
            <ul  className='flex flex-row justify-center gap-20 py-5'>
                <Link href='/' ><li onClick={removeAllScore}>Home</li></Link>
                <Link href="/category"><li onClick={removeAllScore}>Category</li></Link>
                <Link href="/about"><li onClick={removeAllScore}>About</li></Link>
            </ul>
        </nav>
    </div>

  )
}

export default Navigation