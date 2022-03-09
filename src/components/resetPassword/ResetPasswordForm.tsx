import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaKey } from 'react-icons/fa';
import { MdPassword, MdDoneAll } from 'react-icons/md';
import axios from 'axios';
import { Div, Form, Input, KeyContainerDiv } from './ResetPasswordForm.styles';
interface Props {
  params: any;
}
const ResetPassword: React.FC<Props> = (props) => {
  const { hashedtoken } = useParams();
  console.log(hashedtoken);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();

      let response = await axios.post(
        `/api/v1/users/resetPassword/${hashedtoken}`,
        {
          password: password,
        }
      );
      console.log(response);
      console.log(response.data.msg);
      let { status, msg } = response.data;

      setSuccess(true);
      setError('');
      setSuccess(true);
      setMessage(msg);
      setPassword('');
      setConfirmPassword('');
    } catch (error: any) {
      console.log(error.response.data);
      setError(error.response.data);
      setSuccess(false);
    }
  };
  const handleChange = (e: any) => {
    setPassword(e.target.value);
  };
  const handleConfirm = (e: any) => {
    let pass = password;
    let confirm = e.target.value;
    if (pass !== confirm) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
    setConfirmPassword(e.target.value);
  };
  return (
    <Div>
      {success ? (
        <div className="success-container">
          <KeyContainerDiv className="done-logo">
          <MdDoneAll
            style={{
              color: '#fff',
              fontSize: '4rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          />
          </KeyContainerDiv>
          <h1 style={{ color: '#fff' }}>🥳 🤩 {message}</h1>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        </div>
      ) : (
        <>
          <KeyContainerDiv>
            <FaKey style={{ color: '#fff', fontSize: '2rem' }} />
          </KeyContainerDiv>
          <h2>You made it 🤩 </h2>
          <p>Now type in the New Password</p>
          <Form onSubmit={handleSubmit}>
            <div className="password_input_container form__group field">
              <MdPassword
                style={{
                  color: '#fff',
                  fontSize: '2rem',
                  left: '0',
                  position: 'absolute',
                }}
              />
              <Input
                value={password}
                type="password"
                placeholder="New Password"
                className="form__field"
                onChange={handleChange}
              />
            </div>
            <div className="password_input_container form__group field">
              <MdPassword
                style={{
                  color: '#fff',
                  fontSize: '2rem',
                  left: '0',
                  position: 'absolute',
                }}
              />
              <Input
                value={confirmPassword}
                type="password"
                placeholder="Retype password"
                className="form__field"
                onChange={handleConfirm}
              />
              <span>{error && <p style={{ color: 'red' }}>{error}</p>}</span>
            </div>
            <div className="btn-container">
              <button className="btn" type="submit">
                Send
              </button>
            </div>
          </Form>
        </>
      )}
    </Div>
  );
};
export default ResetPassword;
