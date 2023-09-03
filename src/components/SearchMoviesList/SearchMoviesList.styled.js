import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PosterListLink = styled(Link)`
  display: flex;
  gap: 13px;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 8px;
  border: 1px solid black;
  border-radius: 4px;
  color: black;
  background-color: whitesmoke;

  &:hover {
    color: orangered;
    background-color: lightblue;
  }
`;
