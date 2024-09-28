import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: ${({ theme }) => theme.spacing.s8};

    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 74px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
      margin-bottom: 0;
      margin-top: ${({ theme }) => theme.spacing.s3};
      padding: ${({ theme }) => theme.spacing.s3};
    }
  }
`;

export const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${({ theme }) => theme.spacing.s2};
  grid-row-gap: ${({ theme }) => theme.spacing.s3};

  padding: ${({ theme }) => theme.spacing.s3};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    padding: 0;
  }
`;

// deleteme
export const Post = styled.div`
  height: calc((${({ theme }) => theme.visibleWidth} - 48px) / 3);
  width: 100%;
  background-color: gray;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    height: calc(
      (((${({ theme }) => theme.visibleWidth} - 88px) / 2) - 16px) / 3
    );
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    height: 180px;
  }
`;

//  ((visibleWidth - 88px)/2 -16px) / 3
