import React from 'react';
import { Link } from 'react-router-dom';


const AllUsersList = () => {
    return (

        <div className='UserTable'>

            <Link to={"/add-user"}> Add User </Link>

        </div>
    );
};

export default AllUsersList;