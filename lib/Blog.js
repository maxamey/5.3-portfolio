import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="blog__container">
        <h2 className="blog__title">Blog</h2>
        <article className="blog__item">
          <h3 className="blog__item--title">
            What Doth Code?
          </h3>
          <p className="blog__item--text">
            In a broad sense, code is a system of rules to translate information into a different presentation. This is usually done for either the purpose of ease of understanding, or to increase the difficulty of understanding.
            Any language is a code. Spoken language translates thoughts and ideas into a format purposed for hearing while written language translates those words into a format purposed for seeing.
            In computing, source code is a way for humans to give a computer a set of instructions to take an action or a set of actions. This is usually written in a human-readable computer language which is then translated by an assembler or a compiler into the computer's language of binary machine code. This human-readable computer language is often called source code and is written in plain text (the data that represents characters but on the data that the characters ipso facto represent).
          </p>
        </article>
      </div>
    )
  }
});
