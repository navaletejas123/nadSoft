import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


const Update_details = () => {

    // const apikey = "49b6ce83752b47edbe3d801b23377e81";
    const apikey = import.meta.env.VITE_API_KEY

    const location = useLocation();
    const el = location.state
    const navigate = useNavigate();

    useEffect(() => {
        console.log(el)
        setText({
            _id: el._id,
            name: el.name,
            age: el.age,
            colour: el.colour,
        })
    }, [])

    const [text, setText] = useState({
        _id: "",
        name: "",
        age: "",
        colour: "",
    })

    const sendData = async () => {
        fetch(
            `https://crudcrud.com/api/${apikey}/members/${text._id} `, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'PUT',
            body: JSON.stringify({
                name: text.name,
                age: text.age,
                colour: text.colour,
            })
        })
            .then(response => console.log(response))
    }


    const handleSave = () => {
        sendData();
        navigate('/')
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-4 mx-auto">
                    <h1 className='text-center my-5'>Update Update</h1>
                    <input type="text" className='form-control rounded-0 mb-2' value={text.name} onChange={(e) => { setText({ ...text, name: e.target.value }) }} placeholder='name' />
                    <input type="text" className='form-control rounded-0 mb-2' value={text.age} onChange={(e) => { setText({ ...text, age: e.target.value }) }} placeholder='age' />
                    <input type="text" className='form-control rounded-0 mb-2' value={text.colour} onChange={(e) => { setText({ ...text, colour: e.target.value }) }} placeholder='colour' />
                    <button className='btn btn-sm btn-success' onClick={handleSave}>save +</button>
                </div>
            </div>
        </div>
    )
}

export default Update_details
