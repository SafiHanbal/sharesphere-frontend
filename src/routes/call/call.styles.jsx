import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;