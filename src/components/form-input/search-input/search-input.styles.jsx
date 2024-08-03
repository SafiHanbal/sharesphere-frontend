import styled from 'styled-components';

import SearchIconSVG from '../../../assets/icons/search.svg?react';
import CancelIconSVG from '../../../assets/icons/x.svg';

import { Input as DefaultInput } from '../default-input/default-input.styles';

export const SearchIcon = styled(SearchIconSVG)`
  position: absolute;
  left: ${({ theme }) => theme.spacing.s3};
  top: 50%;
  transform: translateY(-50%);
  height: 18px;
  width: 18px;

  & path {
    fill: ${({ theme }) => theme.color.gray.g7};
  }
`;

export const Input = styled(DefaultInput)`
  padding: ${({ theme }) => theme.spacing.s2} ${({ theme }) => theme.spacing.s1}
    ${({ theme }) => theme.spacing.s2} ${({ theme }) => theme.spacing.s6};

  &::-webkit-search-cancel-button {
    appearance: none;
    content: url(${CancelIconSVG});
    cursor: pointer;
  }
`;
