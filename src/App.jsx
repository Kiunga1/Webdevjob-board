import React from 'react'
import Button from './Components/Button/Button'
import Header from './Components/Header/Header'
import JobDiv from './Components/JobDiv/JobDiv'



const App = () => {
  return (
    <div>
      <Header heading='devjobs'/>
      <JobDiv/>
      <Button/>
    </div>
  )
}

export default App
