import styled from 'styled-components';

export const Nav = styled.nav`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    display: block;
  }
`;
