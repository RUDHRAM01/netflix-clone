import React ,  { useRef }  from "react";
import { useState } from "react";
import { addSign } from './signSlice';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import img1 from '../image/tv.png';
import img2 from '../image/download.jpg';
import img3 from '../image/create_profile.png'
import img4 from '../image/device.png';
import img5 from '../image/ba.jpg';
import vid1 from '../video/vid1.m4v';
import vid2 from '../video/vid2.m4v';
import img6 from '../image/boxshot.png';
import { AiOutlineClose } from "react-icons/ai/";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './HomeANDsign.css';
import { useEffect } from "react";

import email from '@emailjs/browser';
export default function Home() {

    const [switchPage, setSwitchPage] = useState(true);
    const defaultValue = {
        user_email: "",
        get_code : "",
    }

    const [num, setNum] = useState(4324);

    function randomNumberInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    const randomClick = () => {
      setNum(randomNumberInRange(1565, 5546));
    };
    useEffect(() => {
        randomClick();
    },[]);
    const form = useRef();
    
    const sendEmail = (e) => {
            setSwitchPage(false);

        e.preventDefault();
            email.sendForm('service_3bw0bgl', 'template_1a8v3iu', form.current, '9XxTjzieZLyjIsbLa')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });
    }

    const [formValues, setFormValues] = useState(defaultValue);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        console.log(name);
        setFormValues({
          ...formValues,
          [name]: value,
        });
    };



    const codeChecker = () => {
        if (num == formValues.get_code) {
            setSwitchPage(true);
            alert("done");
        } else {
            console.log(num);
            console.log(formValues.get_code);
            alert("please enter valid code");
        }
    }

      const handleSubmit = (event) => {
        const { name, pass } = formValues;
        // checkUser(formValues);
        dispatch(addSign(formValues));
    };
    
    return (
        <>
            {switchPage ? (
        <section className="my_home">
        <div className='background'>
            <div className='top'>
            <Link to={'./'}>
            <img className="logo" src="https://pngimg.com/uploads/netflix/netflix_PNG25.png" alt="no img" />
            </Link>
               
                    <div className="navSS">
                        <select className="selectlanguage">
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                        </select>
                        <Link to={'./signIn'}>
                            <button className="signbutton">Sing In</button>
                        </Link>
                    </div>
            </div>
            
            <div className="backdark1">
            <div className="searchEmail">
                <div className="heading1">
                    <h1>Unlimited Movies, TV<br /> &ensp; Shows and more.</h1><br /><h5>&ensp;&ensp; Watch anywhere. cancel anytime.</h5><h6>&ensp;&ensp;<br />Ready to watch? Enter your email to create or restart your memebership.</h6>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                    <div className="searchEmail_base">
                        <input type="email" name="user_email" placeholder="Email" required onChange={handleInputChange} className="inputsearch" value={formValues.user_email}/>
                            <button className="getstated" onClick={sendEmail}>Get Started <div className="arrow"><ArrowForwardIosIcon /></div></button>
                        <input type="text" value={num} name="code" className="hide_Input" readOnly/>                        
                    </div>
                    </form> 
            </div>
            </div>
            <div className='back'>
                <img src={img5} alt="no img" />
            </div>
        </div>
        <hr className="my_hr" />
                    

        {/* home first look end */}

        <div className="container">
            <div className="imageFirsthead">
                <div className="image1head_base">
                    <h1>Enjoy on your TV.</h1> <h3>watch on smart TVs, PlayStation, Bbox, Chromecast, Apple TV, Blu-ray Players and more.</h3>
                </div>
            </div>
            <div className="imvi">
                <img className="firstimg_base" src={img1} alt="no img" />
                <div className="vidfirst">
                    <video className="firstvid" src={vid1} autoPlay loop></video> 
                </div>
            </div>
        </div>

        <hr className="my_hr"/>


        <div className="container">
            <div className="imgtwoparent">
                <img className="imgtwo_base" src={img2} alt="no img" />
                    <div className="boxshot">
                        <img className="boximg" src={img6} alt="no img" />
                        <div className="conbox">
                            <h3>Stranger Things</h3>
                            <h4 className="conboxH">Downloading...</h4>
                        </div>
                    </div>
            </div>

            <div className="imageFirsthead">
                <div className="image1head_base">
                    <h1 className="head1">Download your shows to watch offline.</h1> <h3 className="head1">save your favourites easily and always have something to watch.</h3>
                </div>
            </div>
        </div>


        <hr className="my_hr"/>


        <div className="container">
            <div className="imageFirsthead_next">
                <div className="image1head_base">
                    <h1>Watch everywhere.</h1> <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
                </div>
            </div>
            <div className="imvi_next">
                <img className="firstimg_basenext" src={img4} alt="no img" />
                
                <div className="vidfirst_next"> 
                    <video className="firstvidnext" src={vid2} autoPlay loop></video>
                </div> 
                 
            </div>
        </div>

        <hr className="my_hr"/>


        <div className="container">
            <div className="image4up">
                <img className="firstimg_basenext" src={img3} alt="" />
            </div>
            <div className="imageFirsthead_next">
                <div className="image1head_base">
            <h1 className="main1">Create profiles for children.</h1><h3 className="main2">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
                </div>
                </div>
        </div>
        <hr className="my_hr"/>
            
        <div className="askQ"><h1>Frequently Asked Questions</h1></div>
        <div className="parent_main">
            <div className="question">
            <div className="sameClose"><div><h2>What is Netflix?</h2></div><div className="iconClose"> <AiOutlineClose /></div></div>
            <div className="sameClose"><h2>How much does Netflix cost?</h2><div className="iconClose"><AiOutlineClose /></div></div>
            <div className="sameClose"><h2>Where can I watch?</h2><div className="iconClose"><AiOutlineClose /></div></div>
            <div className="sameClose"><h2>How do I cancel?</h2><div className="iconClose"><AiOutlineClose /></div></div>
            <div className="sameClose"><h2>What can I watch on Netflix?</h2><div className="iconClose"><AiOutlineClose /></div></div>
            <div className="sameClose"><h2>Is Netflix good for kids?</h2><div className="iconClose"><AiOutlineClose /></div></div>
            </div>
        </div>
        </section>
            ):(
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
                <div className="my_code_div">
                    <h2>
                       Enter Verification Code
                    </h2>
                    <div >
                        <input  type="password" placeholder="xxxx" name="code" required  onChange={handleInputChange}/>
                    <button onClick={codeChecker}>Enter</button>
                    </div>       
                    <div>                            
                    </div>
                </div>
            </div>
        </div>
            )}

        </>
    );
}