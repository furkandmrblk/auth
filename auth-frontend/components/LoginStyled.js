import styled from 'styled-components';

// Login Containers
export const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 15rem;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  width: 25rem;
`;
// Login Title
export const LoginTitle = styled.h1`
  font-size: 32px;
  font-weight: 500;
  text-align: center;

  margin-bottom: 2rem;
`;

// Login Inputs
export const LoginInput = styled.input`
  background-color: #f2f2f2;
  height: 2.5rem;

  width: 100%;
  border: none;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &::placeholder {
    color: #cdcdcd;
  }
  &:-ms-input-placeholder {
    color: #cdcdcd;
  }
  &::-ms-input-placeholder {
    color: #cdcdcd;
  }
`;

// Login Button

export const LoginButton = styled.button`
  background-color: #fff;
  color: #000;

  height: 2.5rem;

  width: 100%;
  border: 1px solid #000;
  border-radius: 2px;

  cursor: pointer;

  margin-bottom: 2rem;
`;
