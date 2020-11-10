import React, {useContext, useState} from 'react'
import {useParams} from 'react-router-dom'
import {DataContext} from './DataProvider'


export default function Details() {

    const {id} = useParams();

   
    const[products, setProducts] = useContext(DataContext)


    const details = products.filter((product, index) => {
        return product._id ===id
    })

    console.log(details)

    return (
        <>
            {
                details.map(product =>(
                    <div className="details" key={product._id}>
                        <div className="img-container" style={{backgroundImage: `url(${product.images1[1]})`}} />
                        <div className="box-details">
                            <h2 title={product.title}>{product.title}</h2>
                            <h3>${product.price1}</h3>
                        </div>
                        <div className="thumb">
                            {
                                product.images1.map((img, index) => (
                                    <img src={img} alt="" key ={index}/>
                                ))
                            }
                        </div>
                        <button className="cart">Add</button>
                    </div>
                ))
            }
        </>
    )
}
