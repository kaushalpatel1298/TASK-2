import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


export default function ExistingUser() {
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/users')
            .then((res) => {
                setAllUsers(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className="">

            <div className="bg-gray-300 h-screen">
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {allUsers.map((users, index) => (
                        <li
                            key={index}
                            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
                        >
                            <div className="flex-1 flex flex-col p-8">
                                <h3 className="mt-6 text-gray-900 text-sm font-medium ">{users.Name}</h3>
                                <dl className="mt-1 flex-grow flex flex-col justify-between">
                                    <dt className="sr-only">Title</dt>
                                    <dd className="text-gray-500 text-sm">{users.UserName}</dd>
                                    <dd className="text-gray-500 text-sm">{users.ZipCode}</dd>
                                </dl>
                            </div>
                            <div>

                            </div>
                        </li>
                    ))}

                </ul>
            
                
                <Link to="/">
                    <Button variant="outlined" color="secondary" > Create User </Button>

                </Link>
            </div>
            
            

        </div>
    )

}