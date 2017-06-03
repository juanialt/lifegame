import React from 'react';
import { Link } from 'react-router-dom';

class NoMatch extends React.Component {
    render() {
        return (
            <div className="nomatch-component">
                Oops... something went wrong!
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default NoMatch;
