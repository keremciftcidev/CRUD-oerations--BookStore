import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from 'axios';


const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
    price: null,
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async e =>{
    e.preventDefault()
    try {
        await axios.post("http://localhost:8800/books" ,book)
        navigate("/books")
    } catch (err) {
        console.log(err)
    }
  }

  

  return (
    <div>
      <h1>Add new book</h1>
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="desc"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="cover"
        name="cover"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="price"
        name="price"
        onChange={handleChange}
      />

      <button className="formButton" onClick={handleClick}>Add</button>
    </div>
  );
};

export default Add;
