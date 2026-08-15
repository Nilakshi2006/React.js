import React from 'react'
import '../pages/NotFound.css'

const NotFound = () => {
  return (
    <main
      className="error-page"
      style={{
        '--bg-color': '#050505',
        '--text-color': '#fff',
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
      }}
    >
      <div className="container">
        <div className="eyes">
          <div className="eye">
            <div className="eye__pupil eye__pupil--left"></div>
          </div>

          <div className="eye">
            <div className="eye__pupil eye__pupil--right"></div>
          </div>
        </div>

        <div className="error-page__heading">
          <h1 className="error-page__heading-title">
            Looks like you're lost
          </h1>

          <p className="error-page__heading-desciption">
            404 error
          </p>
        </div>

        <a
          className="error-page__button"
          href="/"
          aria-label="back to home"
          title="back to home"
        >
          back to home
        </a>
      </div>
    </main>
  )
}

export default NotFound