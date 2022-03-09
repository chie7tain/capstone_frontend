import React, { useState } from 'react';
import { FaKey } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import axios from 'axios';
import { Div, Form, Input, KeyContainerDiv } from './forgotPassword.styles';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();

      let response = await axios.post('/api/v1/users/forgotPassword', {
        email: email,
      });

      let { status, message } = response.data;
      setSuccess(true);
      setError('');
      setMessage(message);
      setEmail('');

    } catch (error: any) {
      console.log(error.response.data);
      setError(error.response.data);
      setSuccess(false);
    }
  };
  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };
  return (
    <Div>
      <KeyContainerDiv>
        <FaKey style={{ color: '#fff', fontSize: '2rem' }} />
      </KeyContainerDiv>
      {success ? (
        <div>
          <h1 style={{ color: '#fff' }}>{message}</h1>
        </div>
      ) : (
        <>
          <h2>Yo, Forgot Your Password ?</h2>
          <p>No Worries! Enter your email and we will send you a reset.</p>
          <Form onSubmit={handleSubmit}>
            <div className="email-input-container form__group field">
              <MdMailOutline
                style={{
                  color: '#fff',
                  fontSize: '2rem',
                  left: '0',
                  position: 'absolute',
                }}
              />
              <Input
                value={email}
                type="email"
                placeholder="Email"
                className="form__field"
                onChange={handleChange}
              />
              {/* <label className="form__label">Email</label> */}
            </div>
            <div className="btn-container">
              <button type="submit">Send</button>
            </div>
          </Form>
        </>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </Div>
  );
};
export default ForgotPassword;
