import styled, { css } from 'styled-components';

import PreviousIconSrc from '../../assets/icons/chevron-left.svg?react';
import NextIconSrc from '../../assets/icons/chevron-right.svg?react';

export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-bottom: 75%;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const SlideButtons = css`
  display: none;
  height: ${({ theme }) => theme.spacing.s4};
  width: ${({ theme }) => theme.spacing.s4};
  padding: ${({ theme }) => theme.spacing.s1};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.nuetral.white};
  box-shadow: ${({ theme }) => theme.effect.shadow.offset.sl};
  cursor: pointer;

  & > path {
    fill: ${({ theme }) => theme.color.nuetral.black};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    display: block;
  }
`;

export const PreviousIcon = styled(PreviousIconSrc)`
  ${SlideButtons}

  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.spacing.s2};
  transform: translateY(-50%);
`;

export const NextIcon = styled(NextIconSrc)`
  ${SlideButtons}

  position: absolute;
  top: 50%;
  right: ${({ theme }) => theme.spacing.s2};
  transform: translateY(-50%);
`;

export const CountDotContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: ${({ theme }) => theme.spacing.s2};
  transform: translateX(-50%);

  & > *:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing.s1};
  }
`;

export const CountDot = styled.button`
  height: ${({ theme }) => theme.spacing.s2};
  width: ${({ theme }) => theme.spacing.s2};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.effect.shadow.offset.sd};
  border: none;
  cursor: pointer;

  background-color: ${({ theme }) => theme.color.gray.g4};
`;

export const CountDotActive = styled(CountDot)`
  background-color: ${({ theme }) => theme.color.nuetral.white};
`;
