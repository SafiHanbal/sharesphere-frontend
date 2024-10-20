import styled from 'styled-components';
import { Link } from 'react-router-dom';

import AddPostIconSVG from '../../assets/icons/plus-square.svg?react';
import MenuIconSVG from '../../assets/icons/list.svg?react';
import ShareIconSVG from '../../assets/icons/share.svg?react';
import BackIconSVG from '../../assets/icons/arrow-left.svg?react';

import {
  PB12Styles,
  PB16Styles,
  PR12Styles,
  PR14Styles,
} from '../../utils/typography/body.styles';
import { H3Styles } from '../../utils/typography/heading.styles';

export const Container = styled.div`
  position: relative;
`;

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

export const BackIcon = styled(BackIconSVG)`
  & path {
    fill: ${({ theme }) => theme.color.gray.g9};
  }
`;

export const AddPostLink = styled(Link)`
  height: ${({ theme }) => theme.spacing.s4};
`;

export const AddPostIcon = styled(AddPostIconSVG)`
  & path {
    fill: ${({ theme }) => theme.color.gray.g9};
  }
`;

export const MenuIcon = styled(MenuIconSVG)`
  cursor: pointer;

  & path {
    fill: ${({ theme }) => theme.color.gray.g9};
  }
`;

export const ShareIcon = styled(ShareIconSVG)`
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

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    position: sticky;
    top: 100px;
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
