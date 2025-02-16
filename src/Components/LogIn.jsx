import React, { useState } from 'react';
import Logo from '../Assets/Images/logo.png';
import { FaFacebook, FaGooglePlus, FaLinkedin } from "react-icons/fa6";

const Login = ({ setIsSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Invalid email address');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    setError('');
    alert('Login Successful!');
  };

  return (
    <div className='w-screen h-dvh bg-[#eeee] flex justify-center items-center'>
      <div className='w-[680px] h-[480px] bg-[#ffffff] rounded-lg flex justify-between'>
        <div className='w-[65%] text-center flex flex-col justify-between'>
          <div className="logo px-4 pt-3">
            <img src={Logo} alt="logo" width={50} height={50} />
          </div>
          <div className='mb-5'>
            <h2 className='text-2xl mb-3 text-[#C1C242]'>Sign in to StarFills</h2>
            <div className='flex gap-2 justify-center mb-3 text-[#C1C242]'>
              <FaFacebook className='text-xl' />
              <FaGooglePlus className='text-xl' />
              <FaLinkedin className='text-xl' />
            </div>
            <p>Or use your email account</p>
          </div>

          <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-[230px] mx-auto justify-center'>
            <input 
              className='input' 
              type="email" 
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              className='input' 
              type="password" 
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className='btn-div'>
              {error && <p className='text-red-500'>{error}</p>}
              <a className='text-sm'>Forgot your password?</a>
              <button type="submit" className='btn bg-[#C1C242]'>Sign In</button>
            </div>
          </form>
        </div>

        <div className='w-[45%] flex flex-col justify-between'>
          <div className='bg-[#C1C242] h-80 flex justify-center items-center rounded-b-full'>
            <h2 className='text-3xl font-bold text-white'>Welcome Back</h2>
          </div>
          <div className='btn-div'>
            <h4 className='text-sm'>Don’t have an account?</h4>
            <button onClick={() => setIsSignUp(true)} className='btn bg-[#C1C242]'>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
