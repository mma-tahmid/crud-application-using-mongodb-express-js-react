import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddUser = () => {

    const navigatePage = useNavigate()

    // const [formData, setFormData] = useState() 
    const [formData, setFormData] = useState(
        // intial value empty for useState
        {
            firstName: "",
            lastName: "",
            email: "",
            password: ""

        }
    )



    // Update the Value
    const inputHandeler = (event) => {
        const { name, value } = event.target
        //this *name* comes from --> input field's *name* attribute
        setFormData({ ...formData, [name]: value })


        // console.log(formData)
    }


    const submitForm = async (event) => {
        event.preventDefault();

        try {

            const response = await axios.post('/api/v2/user-auth/create-user', formData);

            console.log(response.data); // Handle success response
            // toast package use for show pop success notification // this message comes form backend
            toast.success(response.data.msg, { position: "top-right" }) //.data comes from browser
            navigatePage("/")

            // after submit the form  input field will be empty

        }
        catch (error) {
            console.error('Error creating user:', error); // Handle error
        }


    }


    return (
        <div className='add-user container'>

            <Link to={"/"}> Back </Link>

            <h3> Add New User </h3>

            <form onSubmit={submitForm}>

                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" onChange={inputHandeler} className="form-control" id="firstName" name="firstName" placeholder='First Name' />
                    {/* name= firstName (ai name ta database ar field name onusare asbe) */}
                </div>

                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" onChange={inputHandeler} className="form-control" id="lastName" name="lastName" placeholder='Last Name' />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" onChange={inputHandeler} className="form-control" id="email" name="email" placeholder='Email' />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" onChange={inputHandeler} className="form-control" id="password" name="password" placeholder='Password' />
                </div>

                <div>
                    <button>Add User</button>
                </div>


            </form>

        </div>
    );
};

export default AddUser;