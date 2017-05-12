import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import MyTitle from './MyTitle.jsx';

// class MyFirstComponent extends React.Component {
//     render() {
//         return (
//             <HashRouter>
//                 <div>
//                     {/* <Match exactly pattern="/" component={MyTitle}/> */}
//                     {/* <MyTitle title="Props are great 2!" color="rebeccapurple" />
//                     <MyTitle title="Use props everywhere!" color="mediumaquamarine" />
//                     <MyTitle title="Props are the best!" color="peru" /> */}
//                 </div>
//             </HashRouter>
//         );
//     }
// };


class MyFirstComponent extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>
                    <hr/>
                    <Route exact path="/" component={MyTitle}/>
                    <Route path="/about" render={ () => <MyTitle color="rebeccapurple" title="test"/> }/>
                    {/* <Route path="/topics" component={Topics}/> */}
                </div>
            </Router>
        );
    }
};

class MyFirstComponent3 extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

const MyFirstComponent22 = (props) => {
    return (
        <h1>HOLA</h1>
    );
};

ReactDOM.render(<MyFirstComponent/>, document.getElementById('app'));
// ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
