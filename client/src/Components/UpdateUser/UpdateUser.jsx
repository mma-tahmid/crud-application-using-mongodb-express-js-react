import React from 'react';
import { Link } from 'react-router-dom';

const UpdateUser = () => {
    return (


        <div className='Update-user container'>

            <Link to={"/"}> Back </Link>

            <h3> Update User </h3>

            <form>

                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder='First Name' />
                    {/* name= firstName (ai name ta database ar field name onusare asbe) */}
                </div>

                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder='Last Name' />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder='Email' />
                </div>



                <div>
                    <button> Update User </button>
                </div>


            </form>

        </div>

    );
};

export default UpdateUser;