import React, {useState} from 'react';
import {Rating, RatingValueType} from './Rating/Rating';
import {Accordion} from "./Accordion/Accordion";
// import {OnOff} from "./OnOff";
import {UncontrolledRating} from "./UncontrolledRating/UncontrolledRating";
import './App.css';
import {UncontrolledOnOff} from "./UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./UncontrolledAccordion";
import {ClockApp} from "./clock/clock";
import {ClockVersion2} from "./clock-version-2/clock-version-2";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(1)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [switchOn, setSwitchOn] = useState(false);

    return (
        <div className="App">

            {/*<ClockApp/>*/}
            <ClockVersion2 mode={'analog'}/> analog
            <hr/>
            <ClockVersion2 mode={'digital'}/> digital

            <AppTitle title='RATING'/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <hr/>
            <AppTitle title='ACCORDION'/>
            <Accordion titleValue='Accordion Title Collapsed'
                       collapsed={accordionCollapsed}
                       onClick={() => {
                       }}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}
                       items={[
                           {title: 'Art', value: 2},
                           {title: 'Tonya', value: 3},
                           {title: 'Gena', value: 4},
                           {title: 'Tamara', value: 5}
                       ]}/>
            <hr/>
            <AppTitle title='ONOFF'/>
            {/*<OnOff switchOn={switchOn} onChange={setSwitchOn}/>*/}
            <hr/>
            <AppTitle title=' UNCONTROLLED ACCORDION'/>
            <UncontrolledAccordion titleValue={'ACCORDION TITLE'}/>
            <hr/>
            <AppTitle title='UncontrolledRating'/>
            <UncontrolledRating onChange={val => setRatingValue(val)} defaultValue={3}/>
            <hr/>
            <AppTitle title='Uncontrolled OnOff'/>
            <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
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
