import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";

function App() {
    const [count, setCounter] = useState(0);

    return <button onClick={() => setCounter(count + 1)}>{`Clicked ${count}`}</button>;
}

render(<App />, document.getElementById("root"));