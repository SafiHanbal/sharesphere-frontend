import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 74px;
  padding: ${({ theme }) => theme.spacing.s3};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    margin-bottom: 0;
  }
`;
