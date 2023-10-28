import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    country: '',
    comments: '',
  })
  function changeHandler(event) {
    const { name, value, type, checked } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === checked ? checked : value,
    }))
  }
  return (
    <div className="flex flex-col items-center mt-2">
      <form>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter First Name"
          onChange={changeHandler}
          value={formData.firstName}
          name="firstName"
          className="outline"
        />
        <br />

        <label htmlFor="middleName">Middle Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter Middle Name"
          onChange={changeHandler}
          value={formData.middleName}
          name="middleName"
          className="outline"
        />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter Last Name"
          onChange={changeHandler}
          value={formData.lastName}
          name="lastName"
          className="outline"
        />
        <br />
        <label htmlFor="email">E-mail</label>
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          onChange={changeHandler}
          value={formData.email}
          name="email"
          className="outline"
        />
        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline"
        >
          <option>India</option>
          <option>Russia</option>
          <option>USA</option>
          <option>Japan</option>
          <option>China</option>
          <option>Canada</option>
        </select>
        <br />
        <fieldset>
          <legend>By Email</legend>
          <div className="flex flex-row">
            <input
              type="checkbox"
              name="comments"
              id="comments"
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>akshduahsd alsdahsdd alsjushan</p>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default App
