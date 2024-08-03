import styled from 'styled-components';

import ShowIconSVG from '../../../assets/icons/eye-fill.svg?react';
import HideIconSVG from '../../../assets/icons/eye-slash-fill.svg?react';

import { Input as DefaultInput } from '../default-input/default-input.styles';

export const Input = styled(DefaultInput)`
  padding: ${({ theme }) => theme.spacing.s2} ${({ theme }) => theme.spacing.s7}
    ${({ theme }) => theme.spacing.s2} ${({ theme }) => theme.spacing.s3};
`;

export const ShowIcon = styled(ShowIconSVG)`
  position: absolute;
  right: ${({ theme }) => theme.spacing.s3};
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  & path {
    fill: ${({ theme }) => theme.color.gray.g7};
  }
`;

export const HideIcon = styled(HideIconSVG)`
  position: absolute;
  right: ${({ theme }) => theme.spacing.s3};
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  & path {
    fill: ${({ theme }) => theme.color.gray.g7};
  }
`;
