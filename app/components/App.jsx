import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../containers/Home.jsx';
import Description from '../containers/Description.jsx';
import NoMatch from '../containers/NoMatch.jsx';

const App = ({ store }) => (
    <Provider store={store}>
        <Router>
            <section>
                <Route exact path="/" component={Home} />
                <Route path="/title" component={Description} />
                <Route component={NoMatch}/>
            </section>
        </Router>
    </Provider>
);

export default App;
