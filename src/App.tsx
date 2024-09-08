import React, {useState} from 'react';
import {Rating, RatingValueType} from './Rating';
import {Accordion} from "./Accordion";
import {OnOff} from "./OnOff";
import {UncontrolledAccordion} from "./UncontrolledAccordion";
import {UncontrolledRating} from "./UncontrolledRating";
import './App.css';

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(1)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [switchOn, setSwitchOn] = useState(false);

    return (
        <div className="App">
            <AppTitle title='RATING'/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <hr/>
            <AppTitle title='ACCORDION'/>
            <Accordion titleValue='Accordion Title Collapsed'
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>
            <hr/>
            <AppTitle title='ONOFF'/>
            <OnOff switchOn={switchOn} onChange={setSwitchOn}/>
            <hr/>
            <AppTitle title=' UNCONTROLLED ACCORDION'/>
            <UncontrolledAccordion titleValue={'ACCORDION TITLE'}/>
            <hr/>
            <AppTitle title='UncontrolledRating'/>
            <UncontrolledRating/>
            <hr/>
            <AppTitle title='Uncontrolled OnOff'/>
        </div>
    );
}

type AppTitleType = {
    title: string
}

function AppTitle({title}: AppTitleType) {
    return (
        <h1 style={{display: 'flex', justifyContent: 'center'}}>{title}</h1>
    )
}

export default App;
