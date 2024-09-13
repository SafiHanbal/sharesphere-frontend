import styled from 'styled-components';
import { Link } from 'react-router-dom';

import CloseIconSvg from '../../assets/icons/x.svg?react';
import MoreIconSvg from '../../assets/icons/three-dots-vertical.svg?react';

import {
  PB16Styles,
  PR12Styles,
  PB12Styles,
} from '../../utils/typography/body.styles';

export const Container = styled(Link)`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-column-gap: ${({ theme }) => theme.spacing.s3};
  align-items: center;
  padding: ${({ theme }) => theme.spacing.s2} 0;

  text-decoration: none;
  cursor: pointer;
`;

export const Name = styled.p`
  ${PB16Styles}/* line-height: 1; */
`;

export const MoreInfo = styled.p`
  ${PR12Styles}
`;

export const ChatName = styled.span`
  ${PB12Styles}
  margin-right: ${({ theme }) => theme.spacing.s1};
`;

export const CloseIcon = styled(CloseIconSvg)`
  cursor: pointer;

  & path {
    fill: ${({ theme }) => theme.color.gray.g7};
  }
`;

export const MoreIcon = styled(MoreIconSvg)`
  cursor: pointer;

  & path {
    fill: ${({ theme }) => theme.color.gray.g7};
  }
`;
