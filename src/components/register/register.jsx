import React, { useState } from 'react';
import { UseAppContext } from '../../context';  
import { Link } from 'react-router-dom';

const Register = () => {
  const { user, setUser } = UseAppContext();  

  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,  
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (user.firstName && user.email && user.password) {
      setSubmitted(true); 
      console.log('user:', user); 
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full  bg-white p-8 rounded-lg ">
        <h1 className="text-5xl  mb-6">Create Account</h1>
        <p className="text-2xl text-gray-500 mb-6">Your Personal Details</p>
        
        {submitted ? (
          <div className="text-green-600 flex flex-col gap-5 items-center font-semibold ">
          <h1>Registration successful!</h1> 
          <button className='bg-black w-[10vw] py-4 text-white'><Link to={"/"}>login</Link></button>
          </div>

        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
              <input
                type="text"
                name="firstName"  
                value={user.firstName}
                onChange={handleChange}
                required
                className="w-[70vw] px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
                className="w-[70vw] px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
                className="w-[70vw] px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
            <button 
              type="submit" 
              className="w-[17vw] bg-black hover:bg-blue-600 text-white font-bold py-5 px-4 "
            >
              Register 
            </button>
            <span> or <Link className='hover:text-red-600 cursor-pointer text-2xl' to={"/home"}>Return Store</Link></span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
