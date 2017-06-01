import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App.jsx'


const sagaMiddleware = createSagaMiddleware();
const store = createStore(sagaMiddleware); // Create a Redux store holding the state of the app
store.runSaga = sagaMiddleware.run;


// import MyTitle from './MyTitle.jsx';
//
// class MyFirstComponent extends React.Component {
//     render() {
//         return (
//             <Router>
//                 <div>
//                     <ul>
//                         <li><Link to="/">Home</Link></li>
//                         <li><Link to="/about">About</Link></li>
//                         <li><Link to="/topics">Topics</Link></li>
//                     </ul>
//                     <hr/>
//                     <Route exact path="/" component={MyTitle}/>
//                     <Route path="/about" render={ () => <MyTitle color="rebeccapurple" title="test"/> }/>
//                     {/* <Route path="/topics" component={Topics}/> */}
//                 </div>
//             </Router>
//         );
//     }
// }
//
// ReactDOM.render(<MyFirstComponent/>, document.getElementById('app'));

ReactDOM.render(<Router><App/></Router>, document.getElementById('app'));
