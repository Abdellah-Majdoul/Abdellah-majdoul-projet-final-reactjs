import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { UseAppContext } from '../../context';  

const Accueil = () => {
  const { user, setUser } = UseAppContext();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userFound = user.find((e) => e.email === loginData.email);
    console.log(userFound)

    if (!userFound) {
      setErrorMessage('Email not found. Please register.');
    } else if (userFound.password !== loginData.password) {
      setErrorMessage('Incorrect password.');
    } else{
      setUser(userFound); 
      navigate('/home');
    }
  };

  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <div className='h-[90%] w-[90%] flex gap-10'>
        <div className='border w-[50%] h-[60%] pt-2 ps-10 flex flex-col gap-2'>
          <h1 className='text-5xl'>New Customer</h1>
          <h3 className='text-gray-400 text-2xl'>Register Account</h3>
          <p className='text-gray-500 text-xl'>
            By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
          </p>
          <button className='bg-black w-[10vw] py-4 text-white'>
            <Link to="/register">CONTINUE</Link>
          </button>
        </div>

        <div className=''>
          <div className="flex w-full items-center justify-center ">
            <div className="">
              <div className="flex flex-col sm:w-[40rem] rounded-lg border bg-white px-4">
                <div className="flex-auto p-6">
                  <h4 className="text-5xl">Returning Customer</h4>
                  <p className="mb-6 text-gray-500">I am a returning customer</p>

                  <form onSubmit={handleSubmit} className="mb-4">
                    <div className="mb-4">
                      <label htmlFor="email" className="mb-2 inline-block text-xl font-medium uppercase text-gray-700">
                        Email
                      </label>
                      <input
                        type="text"
                        className="py-4 block w-full cursor-text appearance-none rounded-md border border-gray-400 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                        id="email"
                        name="email"
                        placeholder="Enter your email or username"
                        autoFocus=""
                        value={loginData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between">
                        <label htmlFor="password" className="mb-2 inline-block text-xl font-medium uppercase text-gray-700">
                          Password
                        </label>
                        <a href="auth-forgot-password-basic.html" className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500">
                          <small>Forgot Password?</small>
                        </a>
                      </div>

                      <div className="relative flex w-full flex-wrap items-stretch">
                        <input
                          type="password"
                          id="password"
                          className="py-4 relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                          name="password"
                          placeholder="············"
                          value={loginData.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {errorMessage && <div className="text-red-500">{errorMessage}</div>}

                    <div className="mb-4 flex items-center">
                      <button
                        className="grid cursor-pointer select-none rounded-md border border-indigo-500 bg-black py-4 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none w-[15vw]"
                        type="submit"
                      >
                        SIGN IN
                      </button>
                      <span> or <Link className='hover:text-red-600 cursor-pointer text-2xl' to="/home">Return Store</Link></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
