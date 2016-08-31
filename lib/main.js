import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  render() {
    return (
      <main >
        <header>
          <nav>
            <Link to="/main"
                  className="maxPictureLink">
              <img src=""
                   className=""></img>
            </Link>
            <div className="title__container">
              <h1 className="title__heading"> Max Amey </h1>
              <h2 classname="title__subheading"> subtitle </h2>
            </div>

            <Link to="/main"
                  className="mainNav__home">Home</Link>
            <Link to="/blog"
                  className="mainNav__Blog">Blog</Link>
            <Link to="/projects"
                  classname="mainNav__Projects">Projects</Link>
          </nav>
        </header>
          <nav className="mediaBar">
            <div className="github">

            </div>
            <div className="twitter">

            </div>
            <div className="instagram">

            </div>
            <div className="medium">

            </div>
          </nav>
          <div className="bio__container">
            <article className="bio">
              <p className="bio__content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </article>
          </div>


      </main>
    )
  }
})
