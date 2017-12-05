import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

const weatherChart = (props) => {
  return(
    <div>
    <Sparklines data={props.data}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="mean"/>
    </Sparklines>
    </div>
  )
}

export default weatherChart
