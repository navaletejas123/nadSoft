import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


const Show_details = () => {

    const apikey = "f2ab1f906a1a45c6ac60e74defccb61f";

    const navigate = useNavigate();

    const [details, setDetails] = useState([]);

    const getDetails = async () => {
        const data = await axios.get(`https://crudcrud.com/api/${apikey}/members`)
        setDetails(data.data);
    }

    useEffect(() => { getDetails() }, [])


    const handleDelete = async (id) => {

        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this data?",
            icon: "warning",
            dangerMode: true,
        });

        if (willDelete) {
            fetch(
                `https://crudcrud.com/api/${apikey}/members/${id}`, {
                method: 'DELETE'
            }).then(response => console.log(response))
            swal("Deleted!", "Your imaginary data has been deleted!", "success")
                .then(() => {
                    window.location.reload();
                })
        }
    }

    useEffect(() => { }, [handleDelete])


    const handleEdit = (el) => {
        navigate('/update', { state: el })
    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col-8 mx-auto">
                    <h1 className='my-5 text-center'>All Members</h1>
                    <Link to='/add' className='btn btn-success rounded-0 mb-4'>Add Members +</Link>
                    <table className="table table-bordered table-striped text-center table-info">
                        <thead>
                            <tr>
                                <th scope="col">name</th>
                                <th scope="col">age</th>
                                <th scope="col">colour</th>
                                <th scope="col">actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                details.map((el) => (
                                    <tr key={el._id}>
                                        <td>{el.name}</td>
                                        <td>{el.age}</td>
                                        <td>{el.colour}</td>
                                        <td>
                                            <button onClick={() => { handleEdit(el) }} className='btn btn-sm btn-primary me-3'>edit</button>
                                            <button onClick={() => { handleDelete(el._id) }} className='btn btn-sm btn-danger'>delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Show_details
