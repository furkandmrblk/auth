import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  LoginButton,
  LoginDiv,
  LoginForm,
  LoginInput,
  LoginTitle,
} from './LoginStyled';

export default function Login() {
  const router = useRouter();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const submitData = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/user/login', {
        email: input.email,
        password: input.password,
      })
      .catch((error) => {
        return alert(error.response.data.message);
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
      })
      .then(() => {
        router.push('/');
      });
  };

  return (
    <LoginDiv>
      <LoginForm>
        <LoginTitle>Login</LoginTitle>
        <form onSubmit={submitData}>
          <LoginInput
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="email"
          />
          <LoginInput
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="password"
          />
          <LoginButton type="submit">Login</LoginButton>
        </form>
        <Link href="/">
          <a>Back to Homepage</a>
        </Link>
      </LoginForm>
    </LoginDiv>
  );
}
