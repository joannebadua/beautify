import React, { Component } from 'react';
// import './App.css';
import { 
  BrowserRouter as Router, 
  // Link,
  Switch 
} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Root from '.pages/Root';
import Login from '.pages/Login';
import Mainpage from '.pages/Mainpage';
import Settings from '.pages/Settings';
import Freelancers from '.pages/Freelancers';

// const User = ({match}) => {
//   return ( <h1> Welcome User {match.params.username} </h1>)
// }

// class App extends Component {
// render () {
//   return ( 
//     <Router>
//       <div className="App">
      
//       <ul> 
//         <li>
//           <Link to="/">Home</Link>
//           </li>
//           <li>
//           <Link to="/about">About</Link>
//           </li>
//       </ul>
//       <Route path="/" exact strict render={
//         () => {
//           return ( <h1>Welcome to Beautify</h1>);
//         }
//       }/>
//       <Route path="/about" exact strict render={
//         () => {
//           return ( <h1>About Beautify</h1>);
//         }
//       }/>
//       <Route path="/user/:username" exact strict component ={User} />
//     </div>
//     </Router>
//   );
// }
// }


// Freelanders is the setting created after signing up as provider
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
        {/* Settings Page displays the page which has the form with  */}
          <Route exact path="/" component={Root} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/mainpage" component={Mainpage} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/freelancers/:id" component={Freelancers} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
