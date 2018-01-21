import React, {Component} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <header>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/backlog">Backlog</Link>
                                </li>
                                <li>
                                    <Link to="/active">Active</Link>
                                </li>
                                <li>
                                    <Link to="/archive">Archive</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>
                </Router>
            </div>
        );
    }
}

export default App;
