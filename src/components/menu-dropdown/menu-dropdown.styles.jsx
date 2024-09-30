import styled from 'styled-components';

import SettingIconSVG from '../../assets/icons/person.svg?react';
import LogoutIconSVG from '../../assets/icons/box-arrow-right.svg?react';

import { LR14Styles } from '../../utils/typography/label.styles';

export const Container = styled.div`
  position: absolute;
  top: 65px;
  right: ${({ theme }) => theme.spacing.s3};

  display: block;

  background-color: ${({ theme }) => theme.color.nuetral.white};
  box-shadow: ${({ theme }) => theme.effect.shadow.default.md};
  border-radius: ${({ theme }) => theme.spacing.s1};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    top: 54px;
    right: 0;
  }
`;

export const DropdownItems = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: ${({ theme }) => theme.spacing.s2};
  align-items: center;

  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.s2} ${({ theme }) => theme.spacing.s3};
  cursor: pointer;
`;

export const SettingIcon = styled(SettingIconSVG)`
  & > path {
    fill: ${({ theme }) => theme.color.gray.g7};
  }
`;

export const LogoutIcon = styled(LogoutIconSVG)`
  & > path {
    fill: ${({ theme }) => theme.color.gray.g7};
  }
`;

export const DropdownText = styled.p`
  ${LR14Styles}
  color: ${({ theme }) => theme.color.gray.g9};
`;
