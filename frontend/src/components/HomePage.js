import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import JoinRoom from './JoinRoom'
import CreateRoom from './CreateRoom'

export default class HomePage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route path='/' element={
                        <div>
                            <h1>HomePage</h1>
                        </div>
                    }></Route>
                    <Route path='/join' element={<JoinRoom></JoinRoom>}></Route>
                    <Route path='/create' element={<CreateRoom></CreateRoom>}></Route>
                </Routes>
            </Router>
        )
    }

}
