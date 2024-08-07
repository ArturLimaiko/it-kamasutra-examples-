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

function Star () {
  return (
      <div>Star</div>
  )
}

function Accordion () {
    return (
        <div>
            <h3>Меню</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}


export default App;
