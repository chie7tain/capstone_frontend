import React from 'react';
import { FaKey } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import { Div, Form, Input, KeyContainerDiv } from './forgotPassword.styles';

const ForgotPassword = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('submit');
  };
  return (
    <Div>
      <KeyContainerDiv>
        <FaKey style={{ color: '#fff', fontSize: '2rem' }} />
      </KeyContainerDiv>
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
          <Input type="email" placeholder="Email" className="form__field" />
          <label className="form__label">Email</label>
        </div>
        <div className="btn-container">
          <button type="submit">Send</button>
        </div>
      </Form>
    </Div>
  );
};
export default ForgotPassword;
