import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Signup() {
    const [userDetails, setUserDetails] = useState({
        username: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [signupSuccess, setSignupSuccess] = useState(false);

    useEffect(() => {
        localStorage.setItem('Signups', JSON.stringify(userDetails));
    }, [userDetails]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const formSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');
        console.log(userDetails);
        try {
            const response = await axios.post('http://localhost:8081/auth_user/signup', userDetails);
            if(response.status === 201){
                console.log('Signup successful');
                setSignupSuccess(true);
            }
        } catch (error) {
            console.error('Error during signup:', error);
            if (error.response && error.response.status === 409) {
                setErrorMessage("Username already exists. Please choose a different username.");
            } else {
                setErrorMessage('An unexpected error occurred.');
            }
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="card text-center">
                    <div className="card-body w-50 mx-auto">
                        <h1 className="card-title mx-auto">Sign Up</h1>
                        {!signupSuccess ? (
                            <form onSubmit={formSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputUsername" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="exampleInputUsername" name="username" onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword" name="password" onChange={handleChange} required />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        ) : (
                            <div className="alert alert-success" role="alert">
                                Sign up successful! You can now <Link to="/signin">sign in</Link>.
                            </div>
                        )}
                        {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12" style={{ textAlign: 'center', marginTop: '30px' }}>
                    <Link to="/"><button className="btn btn-warning">Home</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
