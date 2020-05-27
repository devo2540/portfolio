import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Maintenance from './Maintenance'
import Home from './Home'
import HeaderNav from "./navigation/HeaderNav";
import AboutPage from './pages/About'
import BlogPage from './pages/Blog'
import SkillsPage from './pages/Skills'
import WorkPage from './pages/Work'

const App = () => {
  const inMaintenance = true

  return inMaintenance === false ? (
    <div className="App">
      <Router>
        <HeaderNav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/story" component={AboutPage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/skills" component={SkillsPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/maintenance" component={Maintenance} />
        </Switch>
      </Router>
    </div>
  ) : (
    <Router>
      <Switch>
        <Route exact path="/" component={Maintenance} />
      </Switch>
    </Router>
  );
}
 
export default App;