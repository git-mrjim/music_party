import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <HomePage />;
    }
}

const app = document.getElementById('app');
render(<App />, app)

export default App;