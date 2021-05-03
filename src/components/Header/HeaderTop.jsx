import React from 'react'

const HeaderTop = () => (
  <>
    <div className="header-top">
      <div className="social">
        <a
          href="https://www.facebook.com/maisonrecords"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook fa-2x" />
        </a>
        <a
          href="https://www.instagram.com/maisonrecords_be/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram fa-2x" />
        </a>
      </div>
      <form action="/" method="get">
        <input type="text" placeholder="search..." />
      </form>
    </div>
  </>
)

export default HeaderTop
