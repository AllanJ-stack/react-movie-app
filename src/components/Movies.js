import React, {useContext} from 'react'
import {DataContext} from './DataProvider'
import {Link} from 'react-router-dom'

export default function Products() {
    const [products, setProducts] = useContext(DataContext)
 


    return (
        <div className="movies">
          {
            products.map(product =>(
                  <div className="card" key={product._id}>
                  <Link to={`/movies/${product._id}`}>
                    <img src={product.images1[0]} alt=""/>
                  </Link>
                  <div className="box">
                  <h3 title={product.title}>
                      <Link to={`/movies/${product._id}`}>{product.title1}</Link>
                  </h3>
                  <p>{product.description}</p>
                  <h4>${product.price1}</h4>
                  <button className="button">Add to cart</button>
                  </div>
                  </div>

            ))
          }
          
          
        </div>
    )
}
