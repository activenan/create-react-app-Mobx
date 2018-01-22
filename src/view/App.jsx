// import React, { Component } from 'react';
// import logo from '../images/logo.svg';
// import '../css/App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={process.env.PUBLIC_URL + '/logo.svg'} className="App-logo" alt="logo" />
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
      
//       </div>
//     );
//   }
// }

// export default App;



import React, {Component} from 'react'
import {Route,} from 'react-router-dom'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
           params: ''
        }
    }

    componentDidMount() {
       if(this.props.location.pathname === '/') {
           //this.props.history.push('/register')
       }
    }
  

    render() {
        const RouteWithSubRoutes = (route) => (
            <Route path={route.path} render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} params={this.state.params}  />
            )}/>
        )
        return (
            <div className="App">
                {this.props.routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route}/>
                ))}
            </div>
        )
    }
}

export default App
