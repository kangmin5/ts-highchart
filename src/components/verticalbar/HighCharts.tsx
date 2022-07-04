
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React from 'react'
import configObj from './configObj'



const HighCharts = () => {

  return (
    <div>
          HighCharts Page
        <HighchartsReact highcharts = {Highcharts} options = {configObj} />
    </div>
  )
}

export default HighCharts