import React,{useState} from 'react'
import './App.css'

function App() {

  // const [firstName,setFirstName] = useState('')
  // const [middleName,setMiddleName] = useState('')
  // const [lastName,setLastName] = useState('')
   
  // console.log(firstName);
  // console.log(middleName);
  // console.log(lastName);
  //   function changeFirstNameHandler(event){
  //     // console.log(event.target.value)
  //     setFirstName(event.target.value)
  //   }
  //   function changeMiddleNameHandler(event){
  //     // console.log(event.target.value)
  //     setMiddleName(event.target.value)
  //   }
  //   function changeLastNameHandler(event){
  //     // console.log(event.target.value)
  //     setLastName(event.target.value)
  //   }
 const [formData,setFormData] = useState({
  firstName:"",
  middleName:"",
  lastName:"",
  email:"",
  comments:"",
  check:true,
  mode:"",
  favCar:""
 });
    console.log(formData);
 function changeHandler(event){
  const {name, value, checked,type}=event.target;
     setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type ==='checkbox'? checked :value
     }
     })
 }


function submitHandler(event){
  event.preventDefault();
  console.log(formData);
}
  return <div className="App">
    <form onSubmit={submitHandler}>
    <input
    type='text'
    placeholder='First Name'
    // onChange={changeFirstNameHandler}
    onChange={changeHandler}
    name="firstName"
    value={formData.firstName}
    />
    <br/>
    <input
    type='text'
    placeholder='Middle Name'
    // onChange={changeMiddleNameHandler}
    onChange={changeHandler}
    name="middleName"
    value={formData.middleName}

    />
    <br/>
    <input
    type='text'
    placeholder='Last Name'
    // onChange={changeLastNameHandler}
    onChange={changeHandler}
    name="lastName"
    value={formData.lastName}

    />
    <br/>
    <input 
    type='email'
    placeholder='Enter Your Email Here'
    onChange={changeHandler}
    name="email"
    value={formData.email}
    />
    <br/>
    <textarea
    placeholder='Comment Here'
    onChange={changeHandler}
    name="comments"
    value={formData.comments}
    />
    <br/>
    <input
    type="checkbox"
    onChange={changeHandler}
    name="check"
    id='check'
    checked={formData.check}
    />
    <label htmlFor='check'>Am i visible?</label>
    <br/>
    <fieldset>
      <legend>Modes:</legend>
      <input
    type='radio'
    onChange={changeHandler}
    name='mode'
    value="Online-Mode"
    id="Online-Mode"
    checked={formData.mode === "Online-Mode"}
    />
    <label htmlFor="Online-Mode">Online Mode</label>
    <input
    type='radio'
    onChange={changeHandler}
    name='mode'
    value="Offline-Mode"
    id="Offline-Mode"
    checked={formData.mode === "Offline-Mode"}
    />
    <label htmlFor="Offline-Mode">Offline-Mode</label>
    </fieldset>
    <label htmlFor="favCar">Choose Car</label>
    <select
    name="faveCar"
    id="favCar"
    value={formData.faveCar}
    onChange={changeHandler}
    >
      <option value="asd">asd</option>
      <option value="asd">asd</option>
      <option value="asd">asd</option>
      <option value="asd">asd</option>
      <option value="asd">asd</option>
      <option value="asd">asd</option>
    </select>
    <br/>
    <button>Submit</button>
    </form>
  </div>
}

export default App
