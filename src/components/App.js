import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import Maintenance from './Maintenance'
import Home from './Home'
import HeaderNav from "./navigation/HeaderNav";
import AboutPage from './pages/About'
import BlogPage from './pages/Blog'
import SkillsPage from './pages/Skills'
import WorkPage from './pages/Work'

const App = () => {
  return (
    <div className="App">
      <Router>
        <HeaderNav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/story" component={AboutPage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/skills" component={SkillsPage} />
          <Route exact path="/blog" component={BlogPage} />
        </Switch>
      </Router>
    </div>
  );
}
 
export default App;