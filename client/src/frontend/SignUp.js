import React , { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { TextField } from "@mui/material";
import { useState } from "react";
import { addSign } from './signSlice';
import { useDispatch } from "react-redux";


import './SignUp.css';

export default function SignUp() {
    const defaultValue = {
        id: "",
        user_email: "",
        pass: "",
    }

    


      const [getSingInInfo, setgetSingInInfo] = useState({});
      const dispatch = useDispatch();
        
    
      const [formValues, setFormValues] = useState(defaultValue);
    const handleInputChange = (e) => {
        console.log(e.target);
        
        const { name, value } = e.target;
        console.log(name);
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };
    
    
    const handleSubmit = (event) => {
        if (formValues.email == "" || formValues.email == " " || formValues.pass == "" || formValues.pass == " " || !formValues.email.includes("@")) {
            alert("please enter valid data!");
            return;
          }
        const { name, pass } = formValues;
      };
    return (
      <>
        <div className="parent_signUp">
                <div className="navigation_signUP">
                <Link to={'./'}>
                <img className="logo" src="https://pngimg.com/uploads/netflix/netflix_PNG25.png" alt="no img" />
                </Link>
                        <div className="SignUPIn">
                            <Link to={'./signIn'}>
                                <button className="signbutton">Sing In</button>
                            </Link>
                        </div>
            </div>
            <hr />
            <div className="main_SignUp">
                <div className="main_child">
                    <h2 className="my_h2">
                        Create a password to start your membership
                    </h2>
                    <h4 className="my_h4">
                    Just a few more steps and you're done!
                    We hate paperwork, too.
                    </h4>
                    <div>    
                    <div>
                            <TextField
                            id="user_email-input"
                            name="user_email"
                            label="Email"
                            type="email"
                            variant="outlined"
                            value={formValues.user_email}
                            onChange={handleInputChange}
                            required
                            fullWidth
                            />
                        </div>
                        <div className="my_pass">
                        <TextField
                        id="pass-input"
                        name="pass"
                        label="Add a password"
                        type="password"
                        variant="outlined"
                        value={formValues.pass}
                        onChange={handleInputChange}
                        required
                        fullWidth
                />
                <button onClick={handleSubmit} className="my_sign_up">Sign Up</button>           
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};