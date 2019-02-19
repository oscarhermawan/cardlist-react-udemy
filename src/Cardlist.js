import React from 'react'
import Card from './Card'

const Cardlist = ({robots}) => {
  return(
    robots.map((obj_id, i) => {
      return(
        <Card
          key={i}
          id={obj_id.id}
          name={obj_id.name}
        />
      )
    })
  )
}

export default Cardlist
