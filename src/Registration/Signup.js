import React, { useState } from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const defaultFormData = {
    Name: "",
    username: "",
    Password: "",
    ConfirmPassword: "",
    ZipCode: "",
    ProfileImage: null

}

export default function Signup() {

    const [formData, setFormData] = useState(defaultFormData);
    const [successfull, setSuccessfull] = useState(false);
    const [errors, setErrors] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null)

    const validateInputs = () => {
        let hasErros = false;
        let Errors = [];
        if(formData.Password.length < 5){
            hasErros = true
            Errors.push("Passwords must be greater than 5 digits!!!")
        }
        if(formData.Password !== formData.ConfirmPassword){
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
        if(validateInputs()) {
            // reset errors
            // network call 
            let myurl = "http://localhost:5000/api/v1/users"
            axios.post(myurl, formData).then(res => {
                console.log(res.data)
                setSuccessfull(true)
            })

            setFormData(defaultFormData)
            setSelectedImage(null)
        }

    }

    const handleFileInput = (e) => {
        const file = e.target.files[0]
        const imageFormData = new FormData();
        imageFormData.append("profileImage", file, file.name)
        setSelectedImage(URL.createObjectURL(file))
        axios.post("http://localhost:5000/api/v1/imageUpload", imageFormData)
            .then(res => {
                setFormData({...formData, ProfileImage: res.data.data._id })
            })
    }

    if (successfull) {
        return (<div class="bg-purple-600 bg-opacity-75 h-screen text-center justify-center" >

            <Container maxWidth="sm">
                <CssBaseline />

                <Box className="rounded-lg shadow-lg pt-6" sx={{ bgcolor: '#ffff', height: '80vh' }} >
                    <header className=" text-2xl font-extrabold">Tekdi technologies user Registration</header>
                    <div class=" justify-center mt-8 content-center">
                            User Registered Successfully
                            <input type="button" value="Create Another User" onClick={() => setSuccessfull(false)}/>
                    </div>
                </Box>
            </Container>
        </div>)
    }

    return (

        <div class="bg-purple-600 bg-opacity-75 h-screen text-center justify-center" >

            <Container maxWidth="sm">
                <CssBaseline />

                <Box className="rounded-lg shadow-lg p-6" sx={{ bgcolor: '#ffff'}} >
                    <header className=" text-2xl font-extrabold">Tekdi technologies user Registration</header>
                    <div class=" justify-center mt-8 content-center">
                        {selectedImage && <img src={selectedImage} />}
                        <input type="file" name="profileImage" onChange={handleFileInput} />
                        <form onSubmit={handleSubmit}>
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
                                    label="Name"
                                    name="Name"
                                    value={formData.Name}
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
                            {errors.map(error => <div >{error}</div>)}

                            <br />
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
                            </div><br />
                            <Button className="shadow-xl hover:bg-blue-700" variant="outlined" type="submit" color="secondary" > Submit </Button>
                        </form>
                    </div>
                </Box>
            </Container>
        </div>
    )
}