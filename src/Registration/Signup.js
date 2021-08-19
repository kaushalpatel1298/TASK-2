import React, { useState } from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

const defaultFormData = {
    Name: "",
    username: "",
    Password: "",
    ConfirmPassword: "",
    ZipCode: "",


}

export default function Signup() {

    const [formData, setFormData] = useState(defaultFormData);
    const [successfull, setSuccessfull] = useState(false);
    const [errors, setErrors] = useState([]);


    const validateInputs = () => {
        let hasErros = false;
        let Errors = [];
        if (formData.Password.length < 5) {
            hasErros = true
            Errors.push("Passwords must be greater than 5 digits!!!")
        }
        if (formData.Password !== formData.ConfirmPassword) {
            hasErros = true
            Errors.push("Passwordds do not Match!!!")
        }
        setErrors(Errors)
        return hasErros
    }


    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // validate
        if (validateInputs()) {
            // reset errors
            // network call 
            alert("Password does not match Try Again!!!")

        }
        else {
            let myurl = "http://localhost:5000/api/users"
            axios.post(myurl, formData).then(res => {
                console.log(res.data)
                setSuccessfull(true)
            })

            setFormData(defaultFormData)
        }

    }



    if (successfull) {
        return (<div class="bg-purple-600 bg-opacity-75 h-screen text-center justify-center" >

            <Container maxWidth="sm">
                <CssBaseline />

                <Box className="rounded-lg shadow-lg pt-6" sx={{ bgcolor: '#ffff', height: '80vh' }} >
                    <header className=" text-2xl font-extrabold">VITASOFT TECHNOLOGIES USER REGISTRATION </header>
                    <div class=" justify-center mt-8 content-center">
                        User Registered Successfully
                        <Button variant="outlined" color="secondary" onClick={() => setSuccessfull(false)} > Create Another User </Button>
                        <br />
                        <Link to="/allusers">
                            <Button variant="outlined" color="secondary" > See Existing  User </Button>
                        </Link>

                    </div>
                </Box>
            </Container>
        </div>)
    }

    return (
        <>
            <div className="text-center justify-center py-6 bg-gray-700">
                <header className=" text-2xl font-extrabold text-white">VITASOFT TECHNOLOGIES USER REGISTRATION</header>

            </div>

            <div class="bg-purple-600 bg-opacity-75 h-screen text-center justify-center " >

                <Container maxWidth="sm">
                    <CssBaseline />

                    <Box className="rounded-lg shadow-lg p-6 " sx={{ bgcolor: '#ffff' }} >
                        <div class=" justify-center  content-center">

                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className=" mt-2">
                                    <br />
                                    <TextField
                                        required
                                        size="small"
                                        type="username"
                                        label="username"
                                        name="UserName"
                                        value={formData.UserName}
                                        onChange={handleChange}
                                    />
                                </div><br />
                                <div >

                                    <TextField
                                        required
                                        type="name"
                                        size="small"
                                        label="First Name"
                                        name="First_Name"
                                        value={formData.First_Name}
                                        onChange={handleChange}
                                    />
                                </div><br />
                                <div >

                                    <TextField
                                        required
                                        type="name"
                                        size="small"
                                        label="Middle Name"
                                        name="Middel_Name"
                                        value={formData.Middle_Name}
                                        onChange={handleChange}
                                    />
                                </div><br />
                                
                                <div >

                                    <TextField
                                        required
                                        type="name"
                                        size="small"
                                        label="Last Name"
                                        name="Last_Name"
                                        value={formData.Last_Name}
                                        onChange={handleChange}
                                    />
                                </div><br />
                                <div >

                                    <TextField
                                        required
                                        type="name"
                                        size="small"
                                        label="email"
                                        name="Email"
                                        value={formData.Email}
                                        onChange={handleChange}
                                    />
                                </div><br />
                                <div>

                                    <TextField
                                        required
                                        size="small"
                                        type="Password"
                                        label="Password"
                                        name="Password"
                                        value={formData.Password}
                                        onChange={handleChange}
                                    />
                                </div><br />
                                <div>

                                    <TextField
                                        required
                                        size="small"
                                        type="Password"
                                        label="ConfirmPassword"
                                        name="ConfirmPassword"
                                        value={formData.ConfirmPassword}
                                        onChange={handleChange}
                                    />
                                </div>


                                <br />
                                <div>

                                    <TextField
                                        required
                                        size="small"
                                        type="String"
                                        label="Address"
                                        name="Address"
                                        value={formData.Address}
                                        onChange={handleChange}
                                    />
                                </div>  <br />
                                <div>

                                    <TextField
                                        required
                                        size="small"
                                        type="name"
                                        label="Country"
                                        name="Country"
                                        value={formData.Country}
                                        onChange={handleChange}
                                    />
                                </div>  <br />
                                <div>

                                    <TextField
                                        required
                                        size="small"
                                        type="name"
                                        label="State"
                                        name="State"
                                        value={formData.State}
                                        onChange={handleChange}
                                    />
                                </div> <br />
                                <div>

                                    <TextField
                                        required
                                        size="small"
                                        type="Number"
                                        label="Zip Code"
                                        name="ZipCode"
                                        value={formData.ZipCode}
                                        onChange={handleChange}
                                    />
                                </div>  <br />
                                <div>

                                    <TextField
                                        required
                                        size="small"
                                        type="Number"
                                        label="Height"
                                        name="Height"
                                        value={formData.Height}
                                        onChange={handleChange}
                                    />
                                </div>  <br />

                                <div>

                                    <TextField
                                        required
                                        size="small"
                                        type="Number"
                                        label="Weight"
                                        name="Weight"
                                        value={formData.Weight}
                                        onChange={handleChange}
                                    />
                                </div>
                                {/* -------------------------- */}


                                {/*  */}
                                <br />

                                <Button className="shadow-xl hover:bg-blue-700" variant="outlined" type="submit" color="secondary" > Submit </Button>
                            </form><br />
                            <Link to="/allusers">
                                <Button variant="outlined" color="secondary" > Existing User </Button>

                            </Link>
                        </div>
                    </Box>
                </Container>
            </div>
        </>
    )
}