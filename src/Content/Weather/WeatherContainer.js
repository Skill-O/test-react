import React from 'react';
import Weather from './Weather';
import {connect} from 'react-redux';

import {changeID, getWeather, showWeather, toggleIsFetching} from '../../redux/weatherReducer';

const mapStateToProps = (state) => {
    return {
        cityID: state.weather.cityID,
        isFetching: state.weather.isFetching,
        forecast: state.weather.forecast
    }
}

class WeatherContainer extends React.Component{

    componentDidMount(){
        this.props.getWeather();
    }

    inputRef = React.createRef();

    render(){
        return(
            <>
            <input ref={this.inputRef} onChange={(e)=>{this.props.changeID(e.target.value)}} value={this.props.cityID} placeholder="city id"/>
            <button onClick={() => {this.props.getWeather(this.inputRef.current.value)}}>Смотреть погоду</button>
            <p style={{color: '#ccc'}}>ID городов: 11754, 12795, 18093, 2229267, 2229336, 3116600, 3116610</p>
            { 
                this.props.isFetching?
                <p style={{color: '#fff', fontSize: '50px'}}>Loading forecast...</p>:
                <Weather {...this.props.forecast}/>
            }
            </>
        );
    }

}

export default connect(mapStateToProps,{
    changeID,
    getWeather,
    showWeather,
    toggleIsFetching
})(WeatherContainer);