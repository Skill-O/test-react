import React from 'react';
import style from './Weather.module.css';

const Weather = (props) => {
    return(
        <div>
            <span className={style.key}>ПОГОДА ДЛЯ:</span> {props.name}<br/>
            <span className={style.key}>Температура:</span> {props.temp}<br/>
            <span className={style.key}>Облачность:</span> {props.clouds}<br/>
            <span className={style.key}>Координаты:</span> {`${props.coord.lon} и ${props.coord.lat}`}<br/>
            <span className={style.key}>Скорость ветра:</span> {props.wind.speed}<br/>
            <span className={style.key}>Направление ветра:</span> {props.wind.deg}<br/>
            <span className={style.key}>ID города:</span> {props.id}<br/>
        </div>
    );
}

export default Weather;