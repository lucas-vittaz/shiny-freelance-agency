import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/survey">
                <Survey />
            </Route>
        </Router>
    <React.StrictMode>
)
