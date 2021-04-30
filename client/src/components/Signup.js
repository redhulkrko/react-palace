import React from "react";
import { signup } from "../util/session";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background: linear-gradient(120deg, #59c2ff, #1270e3);
  }
`;

const Container = styled.div`
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: #fff;
  padding: 3rem 2rem;
  border-radius: 5px;
  width: 90vw;
  text-align: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  h1 {
    font-weight: 600;
    font-size: 1.75rem;
  }

  @media (min-width: 768px) {
    width: 80vw;
    padding: 5rem;
  }

  @media (min-width: 992px) {
    width: 65vw;
    padding: 5rem 6rem;

    h1 {
      font-size: 1.95rem;
    }
  }

  @media (min-width: 1200px) {
    width: 35vw;
    padding: 4rem 3rem;

    h1 {
      font-size: 1.55rem;
    }
  }
`;

const LoginForm = styled.div`
  margin-top: 1.5rem;

  input {
    margin-top: 10px;
    outline: none;
    margin: 0;
    border: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    display: block;
    padding: 10px 1rem;
    width: 100%;
    font-family: inherit;
    font-size: 1.15em;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box; /* Opera/IE 8+ */
  }

  @media (min-width: 768px) {
    margin-top: 2rem;

    input {
      font-size: 1.4em;
    }
  }

  @media (min-width: 992px) {
    margin-top: 1.5rem;

    input {
      font-size: 1.4em;
    }
  }

  @media (min-width: 1200px) {
    margin-top: 1.5rem;

    input {
      font-size: 100%;
    }
  }

  input:focus {
    border-color: #1270e3;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

const Submit = styled.input`
  cursor: pointer;
  background: linear-gradient(120deg, #59c2ff, #1270e3);
  background-size: 180%;
  color: #fff;
  font-weight: 500;
  border: none;
  transition: background 0.35s ease;
`;

const Signup = ({ errors }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };

    signup(user);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Wrapper>
          <h1>Signup</h1>
          <LoginForm>
            <p>{errors}</p>
            <form onSubmit={handleSubmit}>
              <input type="text" name="username" placeholder="Username" />
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
              <Submit type="submit" value="Submit" />
            </form>
          </LoginForm>
          <Link to="/login">Login</Link>
        </Wrapper>
      </Container>
    </>
  );
};

export default Signup;
