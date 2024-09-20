import styled from 'styled-components';

export const Container = styled.div`
  min-height: ${({ theme }) => theme.visibleHeight};
  padding: ${({ theme }) => theme.spacing.s3};

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  /* Tab Landscape css */
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    width: 700px;
    margin: 0 auto;
  }

  /* Desktop css */
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: ${({ theme }) => theme.breakpoint.desktop};
    margin: 0 auto;
  }
`;

export const Logo = styled.img`
  display: block;
  margin: 0 auto ${({ theme }) => theme.spacing.s4};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    display: none;
  }
`;

export const LogoLarge = styled.img`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    display: block;

    width: 500px;
  }
`;

export const RoutesContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 45%;
    padding: ${({ theme }) => theme.spacing.s5};
    background-color: ${({ theme }) => theme.color.nuetral.white};
    border-radius: ${({ theme }) => theme.spacing.s2};
    box-shadow: ${({ theme }) => theme.effect.shadow.offset.ml};
  }
`;
