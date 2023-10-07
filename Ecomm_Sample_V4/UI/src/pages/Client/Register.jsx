import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userRegister } from '../../service/api';
import { Navbar } from '../../components/Navbar';
import { Footer } from './../../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import RegisterSVG from '../../assets/ico/register.webp';



export default function Register() {
    const navigate = useNavigate();
    const [signup, setSignup] = useState({
        name: '',
        phone: 0,
        email: '',
        password: '',
        address:'',
        role:'customer'
    });

    const handleChange = (e) => {
        setSignup({ ...signup, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await userRegister(signup);
        if (res.data === "User registered successfully" && res.status==200) {
            toast.success(` Signup Successfull !`, {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                navigate('/login');
            }, 1500);

        } 
        // else if (res.data === "Email Already Exists") {
        //     toast.error(`Email Already Exists !`, {
        //         position: "bottom-right",
        //         autoClose: 4000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //     });
        // }
         else if (res.data==="Sommething went wrong!" && res.status==="400") {
            toast.error(`Sommething went wrong!`, {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };


    return (
        <>
            <div className='main'>
                <Navbar />
                <div className='auth-container'>
                    <div className='auth-wrapper'>
                        <form className='auth-form-1 app-x-shadow' onSubmit={handleSubmit}>
                            <img src={RegisterSVG} alt="login-img" className='auth-svg'/>
                            <input type="text" name="name" id="name" onChange={handleChange} placeholder='Name' className='auth-field' required />
                            <input type="number" name="phone" id="phone" onChange={handleChange} placeholder='Phone' className='auth-field' required />
                            <input type="email" name="email" id="email" onChange={handleChange} placeholder='Email' className='auth-field' required />
                            <input type="password" name="password" id="password" onChange={handleChange} placeholder='Password' className='auth-field' required />
                            <textarea name="address" id="address" cols="45" rows="5" placeholder='Address' onChange={handleChange} className='auth-field' required/>
                            <button type='submit' className='auth-btn app-x-shadow'> Register </button>
                        </form>
                        <Link to='/login' className='auth-links'>Login</Link>
                    </div>
                </div>
                <Footer />
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}