import React, { useContext } from 'react';
import { AuthContext } from './provider/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            this is home : {user&& <span>{user.displayname}</span>}
        </div>
    );
};

export default Home;