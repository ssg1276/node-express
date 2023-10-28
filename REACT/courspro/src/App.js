import './App.css'
import React, { useState } from 'react'
import NavBar from './NavBar.js'
import Cards from './Cards.js'
import Filter from './Filter.js'
import { apiUrl, filterData } from './Data'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import Spinner from './Spinner'

const App = () => {
  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    setLoading(true)
    try {
      let res = await fetch(apiUrl)
      let output = await res.json()
      setCourses(output.data)
    } catch (error) {
      toast.error('error plz try again')
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <Filter filterData={filterData}></Filter>
      </div>
      <div>
        {loading ? <Spinner></Spinner> : <Cards courses={courses}></Cards>}
      </div>
    </div>
  )
}

export default App
