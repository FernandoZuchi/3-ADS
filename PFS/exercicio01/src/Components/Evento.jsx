import React from 'react'
import { useState } from 'react'

const Evento = (props) => {
    const [evento, setEvento] = useState(0);


  return (
    <li>Evento {props.key}</li>
  )
}

export default Evento