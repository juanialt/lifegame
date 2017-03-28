import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle.jsx';

const MyFirstComponent = React.createClass({
    render() {
        return (
            <div>
                <MyTitle title="Props are great 2!" color="rebeccapurple" />
                <MyTitle title="Use props everywhere!" color="mediumaquamarine" />
                <MyTitle title="Props are the best!" color="peru" />
            </div>
        );
    }
});

// ReactDOM.render(<MyFirstComponent/>, document.getElementById('app'));
ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
