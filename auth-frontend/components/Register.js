import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  RegisterButton,
  RegisterDiv,
  RegisterForm,
  RegisterInput,
  RegisterTitle,
} from './RegisterStyled';

export default function Register() {
  const router = useRouter();
  const [input, setInput] = useState({
    name: '',
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
      .post('http://localhost:3001/user/register', {
        name: input.name,
        email: input.email,
        password: input.password,
      })
      .catch((error) => {
        return alert(error.response.data.message);
      })
      .then(() => {
        router.push('/login');
      });
  };

  return (
    <RegisterDiv>
      <RegisterForm>
        <RegisterTitle>Register</RegisterTitle>
        <form onSubmit={submitData}>
          <RegisterInput
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="name"
          />
          <RegisterInput
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="email"
          />
          <RegisterInput
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="password"
          />
          <RegisterButton type="submit">Sign Up</RegisterButton>
        </form>
        <Link href="/">
          <a>Back to homepage</a>
        </Link>
      </RegisterForm>
    </RegisterDiv>
  );
}
