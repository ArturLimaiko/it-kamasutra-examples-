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
            <Accordion title='Accordion Title'/>
        </div>
    );
}

function AppTitle(props: any) {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;

// создать отдельные окмпоненты для рейтинга и аккордиона и тайтла( его оставим тут же просто создадим отдельную компоненту)
// внутрь star  передать пропсы и создать условие если true  то выделен если нет то не выделен
// в рейтинг тоже передадим пропсы и пропишем условие - если 1 2 3 4 5 то соответствующее количество звезд - иначе возвращаем false
// Rating  в App передадим несколько значений - например value - 3, value 5
// В аккордион прокинуть тайтл