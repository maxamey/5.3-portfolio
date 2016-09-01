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
            <img src="./assets/Todos-thumbnail.jpeg"
                 className="project__thumbnail"/>
          </Link>
          <p className="project__info">
            A simple to-do list app that I made. Use this to add efficency to your day.
          </p>
        </section>
      </div>


    )
  }
});
