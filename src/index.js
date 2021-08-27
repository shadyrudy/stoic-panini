import React from 'react'
import ReactDom from 'react-dom'

function App() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            Hello from React!
            <button onClick={() => setCount(count + 1)}>Click Me! {count}</button>
        </div>
    )
} 
ReactDom.render(<App></App>, document.getElementById('app'))