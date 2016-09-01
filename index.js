import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Main from './lib/Main'
import Blog from './lib/Blog'
import Projects from './lib/Projects'
import Todos from './lib/Todos'

render((
  <Router history={ hashHistory }>
    <Route path="/"
           component={ Main } />
    <Route path="/blog"
           component={ Blog } />
    <Route path="/projects"
           component={ Projects } />
    <Route path="/todos"
           component={ Todos } />
  </Router>
), document.getElementById('app'))
