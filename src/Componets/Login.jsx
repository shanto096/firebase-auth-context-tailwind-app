import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';


const Login = () => {
const {login} = useContext(AuthContext)

    const handleToLogin = (event)=>{
          event.preventDefault()
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email,password);
          
          login(email, password)
           .then(res => {
            const loggedUser = res.user; 
            console.log(loggedUser);
            form.reset()
       })
        .catch((error) => {
           console.log(error);
         });

    }
    return (
        <div>
        <div className='flex justify-center my-5 '>
        <form onSubmit={handleToLogin} className='border-2 border-lime-200 px-5 rounded'>
         <h1 className='text-center text-xl font-bold mb-5 mt-2'>Login</h1>
          <label htmlFor="Email">Email</label><br />
          <input className='my-3 rounded border-2 pl-2 pr-20 py-2 border-slate-700' type="email" name='email' placeholder='Inter your Email' required/><br />
          <label htmlFor="Email">Password</label><br />
          <div className="relative ">
          <input className='my-3 rounded border-2 pl-2 pr-20 py-2 border-slate-700' type='password' name='password' placeholder='Inter your Password' required/>
          {/* <span className='absolute  right-8 top-5'><Icon onClick={handleToShowPassword} size={25} icon={icon}> </Icon></span> */}
          </div>
          <input className='bg-emerald-300 my-4 py-2 px-4 ml-24 rounded-lg' type="submit" value="submit" />
          <p className='text-sm mb-3'>create an Account! please <Link to='/register'><span className='text-green-400 font-bold'>Register</span></Link></p>
          <p className='text-sm mb-2'>Please Forget your password <button  className='bg-green-400'>Reset password</button></p>
          {/* <p className='text-red-400 text-sm'>{error}</p>
          <p className='text-green-400 text-sm'>{success}</p> */}
        </form>
        </div>
    </div>
    );
};

export default Login;