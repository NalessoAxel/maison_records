/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

const Vinyl = (props) => {
  const { product, onAdd } = props
  console.log(onAdd)

  return (
    <>
      <div className="tile">
        <div className="hover-effect">
          <img src={product.image} alt={product.name} />
          <div className="overlay">
            <h2>Description of the records when hove the img</h2>
          </div>
          <div className="infos-record">
            <div className="artistAndTitlePrice">
              <span className="artistName">
                <span>{product.title}</span>
              </span>
              <p>
                <span>
                  <span>{product.subTitle}</span>
                </span>
              </p>
              <p>
                <span>
                  <span>{product.price}</span>
                </span>
              </p>
            </div>
            <span className="button">
              <Link to="/ReleaseDetails">
                <button className="showMore">Show More</button>
              </Link>
              <button onClick={() => onAdd(product)} className="addToCart">
                Add to cart
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
export default Vinyl
