import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { H4Styles } from '../../utils/typography/heading.styles';
import {
  PR14Styles,
  PR12Styles,
  PB14Styles,
} from '../../utils/typography/body.styles';

import LoginSVG from '../../assets/icons/box-arrow-in-right.svg?react';

export const Container = styled.div`
  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s4};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 100%;
  }
`;

export const SocialLogin = styled.div`
  & > button {
    width: 100%;
  }

  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s3};
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

export const Heading = styled.h4`
  ${H4Styles}
`;

export const LoginIcon = styled(LoginSVG)`
  margin-left: ${({ theme }) => theme.spacing.s1};
`;

export const Info = styled.p`
  ${PR12Styles}
`;

export const Paragraph = styled.p`
  ${PR14Styles}
`;

export const NavigationLink = styled(Link)`
  ${PB14Styles}

  margin-left: ${({ theme }) => theme.spacing.s2};
  color: ${({ theme }) => theme.color.info.dark};
`;
