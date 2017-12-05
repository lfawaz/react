import React, { Component } from 'react'
import { connect } from 'react-redux'
import WeatherChart from '../components/chart'
import CityGoogleMap from '../components/google_map'

class WeatherList extends Component{

  renderList(cityData){
    const temp = cityData.list.map(data => data.main.temp)
    const pressure = cityData.list.map(data => data.main.pressure)
    const humidity   = cityData.list.map(data => data.main.humidity)
    const { lon, lat } = cityData.city.coord

    return(<tr key={cityData.city.name}>
      <td className="googleMap"><CityGoogleMap className="googleMap" lon={lon} lat={lat} /></td>
      <td><WeatherChart data={temp} color='orange' /></td>
      <td><WeatherChart data={pressure} color='red' /></td>
      <td><WeatherChart data={humidity} color='blue' /></td>
      </tr>)
  }

  render(){
    return(
    <table className="table table-hover">
    <thead>
        <tr>
          <th>City</th>
          <th>Temprature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>
      {this.props.weather.map(this.renderList)}
      </tbody>
      </table>
    )
  }
}


function mapStateToProps({ weather }){
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
