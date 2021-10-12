import logo from './logo.svg';
import './App.css';
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./ReactMenu/Home";
import About from "./ReactMenu/About";
import Service from "./ReactMenu/Service";
import Contact from "./ReactMenu/Contact";
import Navbar from './ReactMenu/Navbar';
import Blog from "./ReactMenu/Blog";
import { Switch, Route, Redirect } from "react-router-dom";
function App() {
  return (
   
    <>
      <Navbar />
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About }/>
        <Route exact path="/Service" component={Service} />
        <Route exact path="/Blog" component={Blog}/>
        <Route exact path="/Contact" component={Contact} />
        <Redirect to ="/" />
        </Switch>
</>
  );
}
export default App;

// import logo from './logo.svg';
// import './App.css';
// import React from "react";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
