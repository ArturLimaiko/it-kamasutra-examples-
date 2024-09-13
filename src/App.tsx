import React, {useState} from 'react';
import {Rating, RatingValueType} from './Rating';
import {Accordion} from "./Accordion";
// import {OnOff} from "./OnOff";
import {UncontrolledAccordion} from "./UncontrolledAccordion";
import {UncontrolledRating} from "./UncontrolledRating";
import './App.css';
import {UncontrolledOnOff} from "./UncontrolledOnOff";

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
                       onClick={()=>{}}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
                       items={[
                           {title: 'Art', value: 2},
                           {title:'Tonya',value: 3},
                           {title: 'Gena', value: 4},
                           {title:'Tamara' , value: 5}
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
