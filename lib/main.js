import React from 'react'
import { Link } from 'react-router'



export default React.createClass({
  render() {
    return (
      <main>
        <header className="main__header">
          <nav className="main__nav">
            <Link to="/main"
                  className="maxPictureLink">
              <img src="./assets/Profile.jpeg"
                   className="maxPicture">

              </img>
            </Link>
            <div className="title__container">
              <h1 className="title__heading">
                Max Amey
              </h1>
              <h2 className="title__subheading">
                subtitle
              </h2>
            </div>

            <Link to="/main"
                  className="main__nav--home">Home</Link>
            <Link to="/blog"
                  className="main__nav--blog">Blog</Link>
                <Link to="/projects"
                  className="main__nav--projects">Projects</Link>
          </nav>
        </header>
          <nav className="mediaBar">
            <div className="github">

            </div>
            <div className="twitter">

            </div>
            <div className="instagram">

            </div>
            <div className="email">

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
