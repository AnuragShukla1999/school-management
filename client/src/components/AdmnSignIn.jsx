import React, { useState } from 'react';
import { AdminSignInContainer, FormContainer, InputField, SubmitButton } from '../styles/AdminSignInStyles';
import axios from 'axios';

const AdmnSignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSignIn = async (e) => {
        e.preventDefault();


        try {
            const response = await axios.post('http://localhost:4000/api/v1/users/signin', { email, password });

            if (response.status === 200) {
                window.location.href = '/admin/dashboard';
            } else {
                console.error('Sign-in Failed');
            }
        } catch (error) {
            console.error('Error during sign-in:', error);
        }
    };

  return (
    <AdminSignInContainer>
        <h2>Admin Sign In</h2>

        <FormContainer>
            <InputField
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target(e.target.value))}
                required
            />

            <InputField
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <SubmitButton onClick={handleSignIn} >Sign In</SubmitButton>
        </FormContainer>
    </AdminSignInContainer>
  );
};

export default AdmnSignIn;