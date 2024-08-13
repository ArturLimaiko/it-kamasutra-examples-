import React from 'react';
import {Rating} from './Rating';
import {Accordion} from "./Accordion";
import {OnOff} from "./OnOff";

function App() {
    return (
        <div className="App">
            <AppTitle title='RATING'/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <hr/>
            <AppTitle title='ACCORDION'/>
            <Accordion titleValue='Accordion Title Collapsed On' collapsed={true}/>
            <Accordion titleValue='Accordion Title Collapsed Off' collapsed={false}/>
            <hr/>
            <AppTitle title='ONOFF'/>
            <OnOff/>
        </div>
    );
}

type AppTitleType = {
    title: string
}

function AppTitle({title}: AppTitleType) {
    return (
        <h1>{title}</h1>
    )
}

export default App;
