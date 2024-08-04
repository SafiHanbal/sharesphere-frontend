import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SaveIconSVG from '../../assets/icons/floppy.svg?react';
import { PB14Styles } from '../../utils/typography/body.styles';
import { LB12Styles } from '../../utils/typography/label.styles';

export const Container = styled.div`
  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s4};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 100%;
  }
`;

export const Form = styled.form`
  text-align: center;
  & > button {
    width: 100%;
  }

  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s3};
  }
`;

export const Label = styled.label`
  ${PB14Styles}

  display: block;
  width: max-content;
  margin: 0 auto;
  color: ${({ theme }) => theme.color.info.dark};
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;
`;

export const SaveIcon = styled(SaveIconSVG)`
  margin-right: ${({ theme }) => theme.spacing.s1};
`;

export const SkipButton = styled(Link)`
  ${LB12Styles}

  text-decoration: none;
  display: block;
  width: max-content;
  margin: 0 auto;
  color: ${({ theme }) => theme.color.gray.g5};
`;
