import React, {useContext} from 'react'
import {DataContext} from './DataProvider'
import {Link} from 'react-router-dom'

export default function ActionMovies() {
    const [products, setProducts] = useContext(DataContext)


    return (
        <div className="actionmovies">
          {
            products.map(product =>(
                  <div className="card" key={product._id}>
                  <Link to={`/actionmovies/${product._id}`}>
                    <img src={product.images2[0]} alt=""/>
                  </Link>
                  <div className="box">
                  <h3 title={product.title2}>
                      <Link to={`/actionmovies/${product._id}`}>{product.title2}</Link>
                  </h3>
                  <p>{product.description}</p>
                  <h4>${product.price2}</h4>
                  <button className="button">Add to cart</button>
                  </div>
                  </div>

            ))
          }
          
          
        </div>
    )
}