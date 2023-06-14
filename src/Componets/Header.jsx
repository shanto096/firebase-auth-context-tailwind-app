import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';

const Header = () => {
const {data, logOut} = useContext(AuthContext)


const logout = ()=>{
  logOut()
  .then(res => {
    alert('singOut successful')
})
.catch((error) => {
   console.log(error);
 });
}

    return (
        <div className='text-xl bg-orange-300 p-4 grid grid-cols-2 text-center font-bold'>
           <div>
           <Link to='/'><span className='mx-5'>Home</span></Link>
            <Link to='/shop'><span className='mx-5'>Shop</span></Link>
            <Link to='/about'><span className='mx-5'>About</span></Link>
            <Link to='/Blog'><span className='mx-5'>Blog</span></Link>
           </div>
              
           <div>
              {
                data?
                <>
                <span>{data.email}</span>
                <span onClick={logout} className='mx-5 bg-green-400 p-2 rounded text-white'>log-out</span>
                </>: 
                <>
                 <Link to='/login'><span className='mx-5 bg-red-500 p-2 rounded text-white'>Login</span></Link>
                 <Link to='/register'><span className='mx-5 bg-green-400 p-2 rounded text-white'>Register</span></Link>
                </>
              }
              {
                 data&& <Link to='/profile'><span className='mx-5'>Profile</span></Link> 
            
              }
           </div>

           
            
        </div>
    );
};

export default Header;