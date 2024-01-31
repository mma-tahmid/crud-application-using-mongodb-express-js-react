import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const AllUsersList = () => {


    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {

        const fetchData = async () => {

            const response = await axios.get("http://localhost:8000/api/v2/user-auth/get-all-user")
            setAllUsers(response.data)

        }

        fetchData();

    }, [])




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
                        allUsers.map((user, index) => {

                            <tr>
                                <td>{index + 1}</td>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>afridi@gmail.com</td>
                                <td>
                                    <button>Delete</button>
                                    <Link to={"/update-user"}> Edit </Link>
                                </td>
                            </tr>

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