import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Add_details = () => {
  
  const apikey = "f2ab1f906a1a45c6ac60e74defccb61f";

  const navigate = useNavigate();

  const [text, setText] = useState({
    name: "",
    age: "",
    colour: "",
  })

  const sendData = async () => {
    fetch(`https://crudcrud.com/api/${apikey}/members`, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'POST',
      body: JSON.stringify({
        name: text.name,
        age: text.age,
        colour: text.colour,
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }


  const handleAdd = () => {
    sendData();
    navigate('/')
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-4 mx-auto">
          <h1 className='text-center my-5'>Add members</h1>
          <input type="text" className='form-control rounded-0 mb-2' onChange={(e) => { setText({ ...text, name: e.target.value }) }} placeholder='name' />
          <input type="text" className='form-control rounded-0 mb-2' onChange={(e) => { setText({ ...text, age: e.target.value }) }} placeholder='age' />
          <input type="text" className='form-control rounded-0 mb-2' onChange={(e) => { setText({ ...text, colour: e.target.value }) }} placeholder='colour' />
          <button className='btn btn-sm btn-success' onClick={handleAdd}>Add +</button>
        </div>
      </div>
    </div>
  )
}

export default Add_details
