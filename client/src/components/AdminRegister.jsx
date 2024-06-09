import React, { useState } from 'react';
import { AdminRegisterContainer, FormContainer, InputField, SubmitButton } from '../styles/AdminRegisterStyles';
import axios from 'axios';

const AdminRegister = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleRegister = async (e) => {
        e.preventDefault();


        try {
            const response = await axios.post('http://localhost:4000/api/v1/register/admin', { email, password });

            if (response.status === 200) {
                window.location.href = '/admin-signIn';
            } else {
                console.error('Registration failed');
            }
        } catch (error) {
            console.log('Error during registration:', error);
        }
    };

  return (
    <AdminRegisterContainer>
        <h2>Admin Register</h2>

        <FormContainer>
            <InputField
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <SubmitButton onClick={(e) => handleRegister(e)} >Register</SubmitButton>
        </FormContainer>
    </AdminRegisterContainer>
  );
};

export default AdminRegister;