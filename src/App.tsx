import React, {useState} from 'react';
import {Rating, RatingValueType} from './Rating';
import {Accordion} from "./Accordion";
import {OnOff} from "./OnOff";
import {UncontrolledAccordion} from "./UncontrolledAccordion";
import {UncontrolledRating} from "./UncontrolledRating";
import './App.css';

function App() {

    let [ratingValue,setRatingValue] = useState<RatingValueType>(1)

    return (
        <div className="App">
            <AppTitle title='RATING'/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <hr/>
            <AppTitle title='ACCORDION'/>
            <Accordion titleValue='Accordion Title Collapsed On' collapsed={true}/>
            <Accordion titleValue='Accordion Title Collapsed Off' collapsed={false}/>
            <hr/>
            <AppTitle title='ONOFF'/>
            <OnOff/>
            <hr/>
            <AppTitle title=' UNCONTROLLED ACCORDION'/>
            <UncontrolledAccordion titleValue={'ACCORDION TITLE'}/>
            <hr/>
            <AppTitle title='UncontrolledRating'/>
            <UncontrolledRating/>
        </div>
    );
}

type AppTitleType = {
    title: string
}

function AppTitle({title}: AppTitleType) {
    return (
        <h1 style={{display: 'flex',justifyContent: 'center'}}>{title}</h1>
    )
}

export default App;
