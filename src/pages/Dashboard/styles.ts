import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #f2f2f2f2;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #f2f2f2;
    border: 2px solid rgb(32, 32, 36);
    background: rgb(32, 32, 36);
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #ffff;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repo = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: row;
  align-items: center;
  background: rgb(32, 32, 36);
  border-radius: 5px;
  transition: transform 0.2s;
  margin-bottom: 16px;

  &:hover {
    transform: translate(12px);
  }
`;

export const DeleteButton = styled.div`
  border-radius: 4px;
  padding: 4px;
  margin-left: 10px;
  transition: background-color 0.4s;
  svg {
    cursor: pointer;
    align-items: center;
  }

  &:hover {
    background-color: #c53030;
    svg {
      color: #000;
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    & + a {
      margin-top: 16px;
    }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-right: 15px;
  }

  div {
    flex: 1;

    strong {
      font-size: 20px;
      color: #f2f2f2;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;
