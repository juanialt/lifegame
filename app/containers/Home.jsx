import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="app-container">
                Home Container
                <Link to="/title">Title</Link>
            </div>
        );
    }
}

export default Home;
