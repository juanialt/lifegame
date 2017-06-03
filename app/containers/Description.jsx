import React from 'react';
import { Link } from 'react-router-dom';

import MyTitle from '../components/MyTitle.jsx';

class Description extends React.Component {
    render() {
        return (
            <div className="app-container">
                Description Container
                <Link to="/">Home</Link>
                <MyTitle title="some title" />
            </div>
        );
    }
}

export default Description;
