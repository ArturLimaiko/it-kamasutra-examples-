import React from 'react';
import {Rating} from './Rating';
import {Accordion} from "./Accordion";

function App() {
    return (
        <div className="App">
            <AppTitle title='Article 1'/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <AppTitle title='Article 2'/>
            <Accordion titleValue='Accordion Title Collapsed On' collapsed={true}/>
            <Accordion titleValue='Accordion Title Collapsed Off' collapsed={false}/>
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
