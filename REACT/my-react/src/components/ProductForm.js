import React, { useState } from 'react'
import './ProductForm.css'
function ProductForm(props) {
  const [newTitle, setTitle] = useState('')
  const [newDate, setDate] = useState('')
  function titleChangeHandler(event) {
    setTitle(event.target.value)
  }
  function dateChangeHandler(event) {
    setDate(event.target.value)
  }
  function submitHandler(event) {
    event.preventDefault()

    const ProductData = {
      title: newTitle,
      date: newDate,
    }
    //console.log(ProductData)
    props.xyz(ProductData)
    setTitle('')
    setDate('')
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-product-Title">
        <label>Title</label>
        <input
          type="text"
          value={newTitle}
          onChange={titleChangeHandler}
        ></input>
      </div>
      <div className="new-product-Date">
        <label>Date</label>
        <input
          type="date"
          value={newDate}
          onChange={dateChangeHandler}
          min="2023-01-01"
          max="2023-12-12"
        ></input>
      </div>
      <div className="new-product-utton">
        <button type="submit">Add Product</button>
      </div>
    </form>
  )
}

export default ProductForm
