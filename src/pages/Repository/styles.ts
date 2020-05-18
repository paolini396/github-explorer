import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }
  }

  svg {
    margin-right: 4px;
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #fff;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: #fff;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #a8a8b3;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;
  transition: transform 0.2s;

  &:hover {
    transform: translate(12px);
  }

  a {
    background: rgb(32, 32, 36);
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
