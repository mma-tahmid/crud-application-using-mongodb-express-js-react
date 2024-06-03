import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import toast from 'react-hot-toast';

const AllUsersList = () => {


    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {

        const fetchData = async () => {

            const response = await axios.get("/api/v2/user-auth/get-all-user")
            setAllUsers(response.data.output)  // this "data" comes from browser & watch in browser consol after consoling (Array ta nia aste hobe)
            //console.log(response.data.output)
        }

        fetchData();

    }, [])


    // Delete PART

    const deleteUser = async (userId) => {
        try {
            const response = await axios.delete(`/api/v2/user-auth/delete-user/${userId}`)
            setAllUsers((previousUser) => previousUser.filter((user) => user._id !== userId))
            toast.success(response.data.msg, { position: "top-right" })
        }

        catch (error) {
            console.error('Error creating user:', error); // Handle error
        }


    }


    return (

        <div className='UserTable container'>

            <Link to={"/add-user"}> Add User </Link>

            <table className="table table-hover table-bordered border-dark">

                <thead>
                    <tr>
                        <th scope="col">S. No</th>
                        <th scope="col">User Name</th>
                        <th scope="col">User Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        //(No need) allUsers && allUsers.map((user, index) => {
                        allUsers.map((user, index) => {

                            return (
                                //key={index} means--> unique key row return row korbe
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.firstName} {user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <div className='d-flex justify-content-center gap-3 '>

                                            <div>
                                                <Link className='text-decoration-none  ' to={`/update-user/` + user._id}> <button className='px-3 btn btn-primary'>Edit </button></Link>
                                            </div>

                                            <div>
                                                <button className='btn btn-danger' onClick={() => deleteUser(user._id)}> Delete </button>
                                            </div>

                                            {/* <div>
                                                <button className='px-3 '><Link className='text-decoration-none ' to={`/update-user/` + user._id}> Edit </Link></button>
                                            </div> */}


                                        </div>

                                        {/* <Link to={`/update-user/` + user._id}> <FaRegEdit /> </Link> */}
                                    </td>
                                </tr>
                            )

                        })
                    }




                    {/* <tr>
                        <td>1</td>
                        <td>Afridi</td>
                        <td>afridi@gmail.com</td>
                        <td>
                            <button>Delete</button>
                            <Link to={"/update-user"}> Edit </Link>
                        </td>
                    </tr> */}

                </tbody>
            </table>

        </div>
    );
};

export default AllUsersList;