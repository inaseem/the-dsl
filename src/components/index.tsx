import styled from 'styled-components';

export const DocList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li + li {
    margin-top: ${({ theme }) => theme.spacing[4]};
  }
`;
