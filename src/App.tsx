import React from 'react';

function App() {
    return (
        <div className="App">
            This App Component
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>

    )
}

function Star() {
    return (
        <div>Star</div>
    )
}

function Accordion() {
    return (
        <div>
            <Accordion/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle() {
    return (
        <h3>Меню</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default App;
