import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className="projects">
        <h1>Projects</h1>
        <section className="project__thumbnail--container">
          <Link to="/todos"
                className="project">
            <img src="#"
                 className="project__thumbnail"/>
          </Link>
        </section>
      </div>
    )
  }
});
