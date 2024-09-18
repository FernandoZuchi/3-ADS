import React, { useEffect } from 'react'
import axios from 'axios';

const App = () => {
  useEffect(() => {
    axios.get('http://localhost:3005/feeds')
  })

  return (
    <div>App</div>
  )
}

export default App