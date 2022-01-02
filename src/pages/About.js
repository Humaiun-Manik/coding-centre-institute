import React from 'react';
import useAuth from '../hooks/useAuth';

const About = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div>
            <h2>signin with google</h2>
            <button onClick={signInWithGoogle}>google</button>
        </div>
    );
};

export default About;