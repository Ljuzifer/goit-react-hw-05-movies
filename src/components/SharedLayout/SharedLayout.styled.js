import { Link, NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const NavigationLink = styled(NavLink)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: black;
  background-color: yellow;
  width: 150px;
  border: 2px solid;
  border-radius: 8px;
  padding: 4px;
  font-weight: 500;
  font-size: larger;
  cursor: pointer;

  &:hover,
  :focus {
    color: yellow;
    background-color: black;
  }

  &.active {
    color: yellow;
    background-color: royalblue;
    border-color: royalblue;
  }

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const MainHead = styled.header`
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  height: 66px;
  border-bottom: 2px solid darkgrey;
  background-color: rgba(120, 120, 120, 0.2);

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 600px;
    margin: auto;
  }
`;

export const HomeTitle = styled.h2`
  margin: 77px auto 20px;
  text-align: center;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 20px auto 20px;
  width: 400px;

  button {
    width: 80px;
    color: white;
    background-color: black;
    font-size: 20px;
    font-weight: 400;

    &:hover,
    :focus {
      color: black;
      background-color: whitesmoke;
    }
  }

  input {
    width: 280px;
    height: 38px;
    text-align: center;
    font-size: 22px;
    font-weight: 400;
  }
`;

export const MainList = styled.ul`
  width: 550px;
  margin: auto;
  padding: 0;
  list-style: none;

  li {
    text-transform: uppercase;
  }

  li::marker {
    align-content: center;
    font-size: 28px;
    font-weight: 800;
  }
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 120px;
  color: black;
  background-color: whitesmoke;
  border: 2px solid black;
  border-radius: 8px;
  padding: 4px;
  margin: 70px auto 22px 22px;

  &:hover,
  :focus {
    color: yellow;
    background-color: black;
  }

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const PosterArea = styled.section`
  display: flex;

  h5 {
    margin-top: 0;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin-top: 0;
    height: fit-content;

    li {
      margin-right: 18px;

      p {
        margin-bottom: 0;
      }
    }
  }
`;

export const InfoArea = styled.div`
  margin-left: 22px;
  h4 {
    margin-bottom: 0;
  }
`;

export const LoadingDiv = styled.div`
  font-size: 28px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  padding: 0;
`;
