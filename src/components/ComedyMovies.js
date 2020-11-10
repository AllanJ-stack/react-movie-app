import React, {useContext} from 'react'
import {DataContext} from './DataProvider'
import {Link} from 'react-router-dom'

export default function ComedyMovies() {
    const [products, setProducts] = useContext(DataContext)


    return (
        <div className="comedymovies">
          {
            products.map(product =>(
                  <div className="card" key={product._id}>
                  <Link to={`/comedymovies/${product._id}`}>
                    <img src={product.images3[0]} alt=""/>
                  </Link>
                  <div className="box">
                  <h3 title={product.title3}>
                      <Link to={`/comedymovies/${product._id}`}>{product.title3}</Link>
                  </h3>
                  <p>{product.description}</p>
                  <h4>${product.price3}</h4>
                  <button className="button">Add to cart</button>
                  </div>
                  </div>

            ))
          }
          
          
        </div>
    )
}