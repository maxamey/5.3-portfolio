import React from 'react'
import { Link } from 'react-router'



export default React.createClass({
  render() {
    return (
      <main className="main__container">
        <header className="main__header">
          <nav className="main__nav">

            <Link to="/main"
                  className="maxPictureLink">
              <h1 className="title__name">
                Max Amey
              </h1>
              <img src="./assets/Profile.jpeg"
                   className="maxPicture">

              </img>
            </Link>
            <div className="main__nav--right">
              <Link to="/main"
                    className="main__nav--home navLink">Home
              </Link>
              <Link to="/blog"
                    className="main__nav--blog navLink">Blog
              </Link>
                  <Link to="/projects"
                    className="main__nav--projects navLink">Projects
              </Link>
            </div>

          </nav>
          <nav className="mediaBar">
            <div className="github">
              <a href=""
                 className="">

              </a>
            </div>
            <div className="twitter">

            </div>
            <div className="instagram">

            </div>
            <div className="email">

            </div>
          </nav>
        </header>

          <div className="bio__container">
            <article className="bio">
              <h2 className="bio__title">
                About Me
              </h2>
              <p className="bio__content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </article>
          </div>
      </main>
    )
  }
})
