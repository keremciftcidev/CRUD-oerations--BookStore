import React, { useEffect, useState } from 'react'
import axios from "axios"

const Books = () => {

    const [books, setBooks] = useState([])

useEffect(() => {
  const fetchAllBook = async ()=>{
    try {
        const res = await axios.get("http://localhost:8800/books")
        console.log(res)
    } catch (err) {
        console.log(err)
    }
  }
  fetchAllBook()
 
}, [])
  return (
    <div>

    </div>
  )
}

export default Books