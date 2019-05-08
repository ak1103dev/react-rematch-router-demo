import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

import './App.css';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function User({ match }) {
  return <h2>User {match.params.id}</h2>
}

function Users({ match }) {
  return (
    <>
      <Route path={`${match.path}/:id`} component={User} />
      <Route
        exact
        path={match.path}
        render={() => <h3>All Users</h3>}
      />
    </>
  );
}

function AppBar(props) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <Link to="/about/">About</Link> */}
          <a onClick={() => props.history.push('/about/')}>About</a>
        </li>
        <li>
          <Link to="/users/">Users</Link>
        </li>
      </ul>
    </nav>
  )
}

const AppBarWithRouter = withRouter(AppBar)

function App(props) {
  return (
    <Router>
      <div>
        <AppBarWithRouter />

        <Route path="/" exact component={Index} />
        <Route exact path="/about" component={About} />
        <Route path="/users" component={Users} />
      </div>
    </Router>
  );
}

const mapState = state => ({
  count: state.count.count,
  xxx: state.cart
})

const mapDispatch = ({ count: { increment, incrementAsync }}) => ({
  increment: () => increment(2),
  incrementAsync: () => incrementAsync(1)
})

export default connect(mapState, mapDispatch)(App);
