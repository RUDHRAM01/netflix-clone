import React from "react";
import { useState } from "react";
import { addSign } from './signSlice';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import img5 from '../image/ba.jpg';
import { Link } from "react-router-dom";
import axios from "axios";
import './HomeANDsign.css';
export default function SignIn() {
  
  const defaultValue = {
    id: "",
    email: "",
    pass: "",
  }
  
  const [getSingInInfo, setgetSingInInfo] = useState({});
  const dispatch = useDispatch();

  const checkUser = async (formV) => {
    try {
      const result = await axios.get(`http://localhost:3000/signs`);
      if (formV.pass == result.data[0].pass && formV.email == result.data[0].email) {
        alert("valid");
      } else {
        alert("invalid");
      }
    } catch (error) {
      console.log(error);
    }  
  }



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
    const { name, pass } = formValues;
    checkUser(formValues);
    // dispatch(addSign(formValues));
  };
    return (
      <section className="my_home">
         <div className='top'>
         <Link to={'./'}>
                <img className="logo" src="https://pngimg.com/uploads/netflix/netflix_PNG25.png" alt="no img" />
                </Link>
                        <div className="navSS">
                            {/* <Link to={'./signIn'}>
                                <button className="signbutton">Sing In</button>
                            </Link> */}
                        </div>
                </div>
        <div className="backdark1">
        <div className="fromsign">
                    <div className="fromsign1" onSubmit={handleSubmit}>
                        <h1>Sign In</h1>
                        <input type="email"                   
                            name="email"
                            value={formValues.email}
                            onChange={handleInputChange}
                            placeholder="Email or phone number" />
                          <input type="text"
                            name="pass"
                            value={formValues.pass}
                            onChange={handleInputChange}
                            placeholder="Password" />
              <button onClick={handleSubmit} className="signconfirm">Sign In</button>
              <div className="base_signIn">
              <div className="base_signIn_bottom">
                  <div className="base_signIn_bottom_q"><h5 className="new_to">New to Netflix?</h5> &ensp;
                    <Link className="first_link" to={'/'}><h5> Sign up now.</h5></Link></div>
                  <div>
                    <h6>
                      This page is protected by Google reCAPTCHA to ensure you're not a bot.<a href="https://policies.google.com/privacy" className="second_link">Learn more.</a>
                    </h6>
                  </div>
              </div>
              </div>

              </div>
          </div>
                </div>
                <div className='back'>
                    <img src={img5} alt="no img" />
                </div>
           <hr className="my_hr"/> 
      </section>
    );
}