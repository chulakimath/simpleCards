import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

const App = () => {
  return (
    <>
      <div className='h-screen w-full bg-zinc-800 relative'>
        <Background />
        <Foreground/>
      </div>
    
    </>
  )
}

export default App
