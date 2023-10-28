import React from 'react'
import './Newproduct.css'
import ProductForm from './ProductForm'

function NewProduct(props) {
  function saveProduct(product) {
    console.log('iam inside new product')
    console.log(product)

    props.ppd(product)
  }

  return (
    <div className="new-product">
      <ProductForm xyz={saveProduct} />
    </div>
  )
}

export default NewProduct
