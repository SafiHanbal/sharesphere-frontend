import styled from 'styled-components';
import { H5Styles } from '../../utils/typography/heading.styles';
import { PR12Styles } from '../../utils/typography/body.styles';

import CloseIconSVG from '../../assets/icons/x.svg?react';

// Base Styles
export const BaseContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.nuetral.white};
  padding: ${({ theme }) => theme.spacing.s3};
  border-radius: ${({ theme }) => theme.spacing.s2};
  box-shadow: ${({ theme }) => theme.effect.shadow.default.sd};
`;

export const BaseHeading = styled.h4`
  ${H5Styles}

  font-family: ${({ theme }) => theme.fontFamily.body};
  margin-bottom: ${({ theme }) => theme.spacing.s1};
`;

export const BaseMessage = styled.p`
  ${PR12Styles}
`;

export const CloseIcon = styled(CloseIconSVG)`
  position: absolute;
  right: ${({ theme }) => theme.spacing.s2};
  top: ${({ theme }) => theme.spacing.s2};
  cursor: pointer;

  & path {
    fill: ${({ theme }) => theme.color.gray.g7};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    right: ${({ theme }) => theme.spacing.s3};
    top: 50%;
    transform: translateY(-50%);
  }
`;
