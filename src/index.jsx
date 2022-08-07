import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Home />
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)
