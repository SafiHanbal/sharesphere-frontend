import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  PB12Styles,
  PB16Styles,
  PR12Styles,
  PR14Styles,
} from '../../utils/typography/body.styles';
import { H3Styles } from '../../utils/typography/heading.styles';

import AddPostIconSvg from '../../assets/icons/plus-square.svg?react';
import MenuIconSvg from '../../assets/icons/list.svg?react';
import ShareIconSvg from '../../assets/icons/share.svg?react';
import BackIconSvg from '../../assets/icons/arrow-left.svg?react';

const Header = styled.header`
  background-color: ${({ theme }) => theme.color.nuetral.white};
  padding: ${({ theme }) => theme.spacing.s3} ${({ theme }) => theme.spacing.s4};
  box-shadow: ${({ theme }) => theme.effect.shadow.offset.sl};

  position: relative;
  display: grid;
  grid-column-gap: ${({ theme }) => theme.spacing.s3};
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    display: none;
  }
`;

export const ProfileHeader = styled(Header)`
  grid-template-columns: 1fr repeat(2, max-content);
`;

export const AccountHeader = styled(Header)`
  grid-template-columns: max-content 1fr max-content;
`;

export const UserName = styled.p`
  ${PB16Styles}
`;

export const BackIcon = styled(BackIconSvg)`
  & path {
    fill: ${({ theme }) => theme.color.gray.g9};
  }
`;

export const AddPostLink = styled(Link)`
  height: 24px;
`;

export const AddPostIcon = styled(AddPostIconSvg)`
  & path {
    fill: ${({ theme }) => theme.color.gray.g9};
  }
`;

export const MenuIcon = styled(MenuIconSvg)`
  cursor: pointer;

  & path {
    fill: ${({ theme }) => theme.color.gray.g9};
  }
`;

export const ShareIcon = styled(ShareIconSvg)`
  margin-right: 0 !important;
  & path {
    fill: ${({ theme }) => theme.color.primary.dark};
  }
`;

export const InfoContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.s3};
  padding-bottom: 0;

  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s3};
  }
`;

export const AlertContainer = styled.div`
  text-align: left;
`;

export const Name = styled.h3`
  ${H3Styles}
`;

export const UserNameBigScreen = styled.p`
  display: none;
  ${PB12Styles}

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    display: block;
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const StatsHeading = styled.p`
  ${PR12Styles}
`;

export const StatsText = styled.p`
  ${PB16Styles}
`;

export const Bio = styled.p`
  ${PR14Styles}
`;

export const ProfileButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: ${({ theme }) => theme.spacing.s3};
`;

export const AccountButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr) max-content;
  grid-column-gap: ${({ theme }) => theme.spacing.s3};
`;
