import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositório no Github</Title>

      <Form>
        <input placeholder="Digite o nome do reposiório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/54335353?s=460&u=e1852bb30f3d4de638af4c0f2040244d65fb5047&v=4"
            alt="Gabriel Paolini"
          />
          <div>
            <strong>gabriel/blog</strong>
            <p>
              Criando blog pessoal utilizando Typescript no nodejs e reactjs.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/54335353?s=460&u=e1852bb30f3d4de638af4c0f2040244d65fb5047&v=4"
            alt="Gabriel Paolini"
          />
          <div>
            <strong>gabriel/blog</strong>
            <p>
              Criando blog pessoal utilizando Typescript no nodejs e reactjs.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/54335353?s=460&u=e1852bb30f3d4de638af4c0f2040244d65fb5047&v=4"
            alt="Gabriel Paolini"
          />
          <div>
            <strong>gabriel/blog</strong>
            <p>
              Criando blog pessoal utilizando Typescript no nodejs e reactjs.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
