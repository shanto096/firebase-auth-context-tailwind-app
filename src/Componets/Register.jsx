import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';


const Register = () => {
    const {createRegister} = useContext(AuthContext)
    console.log(createRegister);

    const handleToRegister = (event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        form.reset()
        createRegister(email, password)
        .then(res => {
             const loggedUser = res.user; 
             console.log(loggedUser);
             
        })
        .catch((error) => {
            console.log(error);
          });

          
    }
    return (
        <div>
        <div className='flex justify-center my-5 '>
            <form onSubmit={handleToRegister} className='border-2 border-lime-200 px-5 rounded'>
             <h1 className='text-center text-xl font-bold mb-5 mt-2'>Register</h1>
             <label htmlFor="Email">Name</label><br />
             <input className='my-3 rounded border-2 pl-2 pr-20 py-2 border-slate-700' type="name" name='name' placeholder='Inter your Name' required/><br />
              <label htmlFor="Email">Email</label><br />
              <input className='my-3 rounded border-2 pl-2 pr-20 py-2 border-slate-700' type="email" name='email' placeholder='Inter your Email' required/><br />
              <label htmlFor="Email">Password</label><br />
              <div className="relative ">
              <input className='my-3 rounded border-2 pl-2 pr-20 py-2 border-slate-700' type='password' name='password' placeholder='Inter your Password' required/>
              {/* <span className='absolute  right-8 top-5'><Icon onClick={handleToShowPassword} size={25} icon={icon}> </Icon></span> */}
              </div>
              <input className='bg-emerald-300 my-4 py-2 px-4 ml-24 rounded-lg' type="submit" value="submit" />
              <p className='text-sm mb-3'>Already create an Account! please <Link to='/login'><span className='text-green-400 font-bold'>Login</span></Link></p>
              {/* <p className='text-red-400 text-sm'>{error}</p>
              <p className='text-green-400 text-sm'>{successful}</p> */}
            </form>
           
        </div>
        </div> 
    );
};

export default Register;