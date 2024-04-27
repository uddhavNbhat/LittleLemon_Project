import React from "react";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import  axios  from 'axios';


function Signin(){
    const [signdata,setSignindata] = useState({username: '', password: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const [signinSuccess, setSigninSuccess] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.setItem('Signups', JSON.stringify(signdata));
    }, [signdata]);

    const handleChange = (event) => {

        const { name , value } = event.target;
        setSignindata(prevDetails => ({
            ...prevDetails,
            [name] : value
        }));
    }

    const formSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');
        console.log(signdata);
        try {
            const response = await axios.post('http://localhost:8081/sign_user/signin', signdata);
            if(response.status === 200){
                console.log('Signin successful');
                setSigninSuccess(true);
                navigate('/');
            }
        } catch (error) {
            console.error('Error during signin:', error);
            if (error.response && error.response.status === 404) {
                setErrorMessage("Wrong Credentials");
            } else {
                setErrorMessage('An unexpected error occurred.');
            }
        }
    };

    if (signinSuccess) {
        navigate('/');
        return null;
    }

    return(
        <div className="container">
            <div className="row">
                <div className="card text-center">
                    <div className="card-header mx-auto">
                        <h1>Sign in</h1>
                    </div>
                    <div className="card-body w-50 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label for="signInUsername" className="form-label">Username</label>
                            <input type="text" className="form-control" id="signInUsername" name="username" value={signdata.username} onChange={handleChange} required/>
                        </div>
                        <div className="mb-3">
                            <label for="signInPassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="signInPassword" name="password" value={signdata.password} onChange={handleChange} required/>
                        </div>
                        <button type="submit" className="btn btn-warning">Submit</button>
                    </form>
                    {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
                    </div>
                </div>
            </div>
            <div className="row mx-auto" style={{marginTop:'50px'}}>
                <h3>Make an Account Right now!</h3>
                <Link to="/signup"><button className="btn btn-warning">Sign Up</button></Link>
            </div>
        </div>
    )
}

export default Signin;