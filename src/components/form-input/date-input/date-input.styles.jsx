import styled from 'styled-components';

import CalendarIconSVG from '../../../assets/icons/calendar4.svg?react';

import { Input as DefaultInput } from '../default-input/default-input.styles';

export const Input = styled(DefaultInput)`
  padding: ${({ theme }) => theme.spacing.s2} ${({ theme }) => theme.spacing.s3}
    ${({ theme }) => theme.spacing.s2} ${({ theme }) => theme.spacing.s6};

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;

  &::-webkit-inner-spin-button,
  &::-webkit-calendar-picker-indicator {
    /* opacity: 0; */
    display: none;
  }
`;

export const CalendarIcon = styled(CalendarIconSVG)`
  position: absolute;
  left: ${({ theme }) => theme.spacing.s3};
  top: 50%;
  transform: translateY(-50%);
  height: 18px;
  width: 18px;
  cursor: pointer;

  & path {
    fill: ${({ theme }) => theme.color.gray.g7};
  }
`;
