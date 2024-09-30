import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { LB12Styles } from '../../utils/typography/label.styles';
import NextIconSVG from '../../assets/icons/arrow-right.svg?react';

export const Container = styled.div`
  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s4};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 100%;
  }
`;

export const Form = styled.form`
  & > button {
    width: 100%;
  }

  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s3};
  }
`;

export const NextIcon = styled(NextIconSVG)`
  margin-left: ${({ theme }) => theme.spacing.s1};
`;

export const SkipButton = styled(Link)`
  ${LB12Styles}

  text-decoration: none;
  display: block;
  width: max-content;
  margin: 0 auto;
  color: ${({ theme }) => theme.color.gray.g5};
`;
