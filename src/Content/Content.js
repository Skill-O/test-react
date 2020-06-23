import React from 'react';
import style from './Content.module.css';
import {Route} from 'react-router-dom';

import WeatherContainer from './Weather/WeatherContainer';
import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';

const Content = () => {
    return(
        <div className={style.content__wrap}>
            <div className="container">
                <Route path="/weather" render={() => <WeatherContainer />}/>
                <Route path="/page1" render={() => <Page1 message="страница 1"/>}/>
                <Route path="/page2" render={() => <Page2 message="привет страница 2"/>}/>
            </div>
        </div>
    );
}

export default Content;