import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { FaGoogle } from "react-icons/fa";
import { useAuth } from '../context/AuthContext';

const Register = () => {
    const [message, setMessage] = useState("");
    const {registerUser, signInWithGoogle} = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

       //   register user

      const onSubmit = async(data) => {
        // console.log(data)
        try {
            await registerUser(data.email, data.password);
            alert("User registered successfully!")
            navigate("/login")
        } catch (error) {
           setMessage("Please provide a valid email and password") 
           console.error(error)
        }
      }
    
      const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            alert("Login successful!");
            navigate("/")
        } catch (error) {
            alert("Google sign in failed!") 
            console.error(error)
        }
      }

  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center  bg-green-950 rounded shadow-2xl'>
    <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ' >
    <h2 className='text-xl font-semibold mb-4'>Please Register</h2>

    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
            <label className='block text-sm text-gray-700 font-bold mb-2' htmlFor="email">Email</label>
            <input 
            {...register("email", { required: true })} 
            type="email" name='email' id='email' placeholder='Email address' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight border-none focus:ring-0'/>
        </div>
        <div className='mb-4'>
            <label className='block text-sm text-gray-700 font-bold mb-2' htmlFor="password">Password</label>
            <input 
            {...register("password", { required: true })} 
            type="password" name='password' id='password' placeholder='Password' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight border-none focus:ring-0'/>
        </div>
        {
            message && <p className='text-red-900 text-xs italic mb-3'>{message}</p>
        }
        <div>
            <button
            className='bg-green-900 hover:bg-green-950 rounded text-white font-bold py-2 px-7 border-none focus:ring-0'>Register</button>
        </div>
    </form>
    <p className='align-baseline font-medium mt-4 text-sm'>Have an account? Let's <Link to="/login" className="text-green-700 hover:text-green-800">login</Link></p>
   
    <div className='mt-4'>
        <button
        onClick={handleGoogleSignIn}
        className='w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-none focus:ring-0'>
        <FaGoogle className='mr-2'/>
        Sign in with Google
        </button>
    </div> 
    <p className='mt-5 text-center text-gray-500 text-xs'>©2024 CET Hotels.All rights reserved.</p>
    </div>
    
    </div>
  )
}

export default Register