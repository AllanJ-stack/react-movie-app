import React, {useContext} from 'react'
import {DataContext} from './DataProvider'
import {Link} from 'react-router-dom'

export default function DramaMovies() {
    const [products, setProducts] = useContext(DataContext)


    return (
        <div className="dramamovies">
          {
            products.map(product =>(
                  <div className="card" key={product._id}>
                  <Link to={`/dramamovies/${product._id}`}>
                    <img src={product.images4[0]} alt=""/>
                  </Link>
                  <div className="box">
                  <h3 title={product.title4}>
                      <Link to={`/dramamovies/${product._id}`}>{product.title4}</Link>
                  </h3>
                  <p>{product.description}</p>
                  <h4>${product.price4}</h4>
                  <button className="button">Add to cart</button>
                  </div>
                  </div>

            ))
          }
          
          
        </div>
    )
}