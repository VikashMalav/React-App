import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './DummyJSON.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
function DummyJSON() {
  let [items, setProducts] = useState([])


  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((responce) => {
        console.log(responce.data.products)
        console.log(items)
        setProducts(responce.data.products)
      })

  }, [])


  return (
    <>
      <h1>axios.com</h1>
      <div className='main-box'>
        {
          items.slice(0,28).map((item) => {
            return (
              <div className='box'>
              <img src={item.thumbnail}></img>

                < h2 > {item.brand.toUpperCase()} </h2>
                < h4 > {item.title} </h4>
                <h3>Price: ${item.price}</h3>
                <p>{ item.description.slice(0,50)}</p>
                <button>add to cart</button>
                <p className='vik'><FavoriteIcon/></p>
                <></>
              </div>
            )
          })
        }

      </div>
    </>

  )
}

export default DummyJSON