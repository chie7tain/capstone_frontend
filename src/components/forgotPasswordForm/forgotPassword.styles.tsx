import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgb(26, 168, 152);
  background: linear-gradient(
    90deg,
    rgba(26, 168, 152, 1) 0%,
    rgba(24, 120, 194, 1) 35%,
    rgba(26, 158, 162, 1) 100%
  );
  h2 {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 3rem;
  }
  p {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 4rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }

  $primary: #11998e;
  $secondary: #38ef7d;
  $white: #fff;
  $gray: #9b9b9b;
  .form__group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid #fff;
    outline: 0;
    font-size: 1.5rem;
    color: #fff;
    padding: 10px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      /* top: 10px; */
      bottom: 15px;
    }
  }

  .form__label {
    position: absolute;
    /* top: 0px; */
    bottom: 0px;
    left: 30px;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #fff;
  }

  .form__field:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #11998e;
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }
  /* reset input */
  .form__field {
    &:required,
    &:invalid {
      box-shadow: none;
    }
  }
`;
// #1aa898
/* #1878c2 */
/* #1a9ea2 */
/* #1a8cb1 */

export const KeyContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  height: 80px;
  width: 80px;
  border: 1px solid #fff;
  margin-bottom: 5rem;
`;

export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .email-input-container {
    width: 50%;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .btn-container {
    width: 50%;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
  button {
    width: 100%;
    height: 50px;
    background: #38ef7d;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s all ease-in-out;
    &:hover {
      background: #fff;
      color: #38ef7d;
    }
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
  text-indent: 30px;
`;
