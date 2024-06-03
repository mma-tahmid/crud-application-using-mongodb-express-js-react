import axios from 'axios';
import  { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const UpdateUser = () => {

    const navigatePage = useNavigate()

    const [formData, setFormData] = useState(
        // intial value empty for useState
        {
            firstName: "",
            lastName: "",
            email: "",
        }
    )

    const { idd } = useParams()

    // Previous data back in update form
    useEffect(() => {

        const fetchData = async () => {

            const response = await axios.get(`/api/v2/user-auth/get-user-by-id/${idd}`)
            setFormData(response.data.output)  // this "data" comes from browser & watch in browser consol after consoling (Array ta nia aste hobe)
            //console.log(response.data.output)
        }

        fetchData();

    }, [idd]) // id comes from useparams


    // Update the Value
    const inputChangeHandeler = (event) => {
        const { name, value } = event.target
        //this *name* comes from --> input field's *name* attribute
        setFormData({ ...formData, [name]: value })
        //console.log(formData)
    }


    const submitForm = async (event) => {
        event.preventDefault();

        try {

            const response = await axios.put(`/api/v2/user-auth/update-user/${idd}`, formData);

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


        <div className='Update-user container'>

            <Link to={"/"}> Back </Link>

            <h3> Update User </h3>

            <form onSubmit={submitForm}>

                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" onChange={inputChangeHandeler} className="form-control" id="firstName" value={formData.firstName} name="firstName" placeholder='First Name' />
                    {/* name= firstName (ai name ta database ar field name onusare asbe) */}
                </div>

                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" onChange={inputChangeHandeler} className="form-control" id="lastName" value={formData.lastName} name="lastName" placeholder='Last Name' />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" onChange={inputChangeHandeler} className="form-control" id="email" value={formData.email} name="email" placeholder='Email' />
                </div>



                <div>
                    <button> Update User </button>
                </div>


            </form>

        </div>

    );
};

export default UpdateUser;