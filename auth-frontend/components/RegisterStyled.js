import styled from 'styled-components';

// Register Containers
export const RegisterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 15rem;
`;

export const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  width: 25rem;
  color: #000;
`;
// Register Title
export const RegisterTitle = styled.h1`
  font-size: 32px;
  font-weight: 500;
  text-align: center;

  margin-bottom: 2rem;
`;

// Register Inputs
export const RegisterInput = styled.input`
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

// Register Button

export const RegisterButton = styled.button`
  background-color: #fff;
  color: #000;

  height: 2.5rem;

  width: 100%;
  border: 1px solid #000;
  border-radius: 2px;

  cursor: pointer;

  margin-bottom: 2rem;
`;
