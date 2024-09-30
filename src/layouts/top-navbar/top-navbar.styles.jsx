import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HomeSVG from '../../assets/icons/house.svg?react';
import ChatSVG from '../../assets/icons/chat-left.svg?react';
import ProfileSVG from '../../assets/icons/person.svg?react';
import NotificationsSVG from '../../assets/icons/bell.svg?react';
import AddPostSVG from '../../assets/icons/plus-square.svg?react';
import MenuSVG from '../../assets/icons/list.svg?react';

export const Container = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    position: sticky;
    top: 0;

    display: block;
    background-color: ${({ theme }) => theme.color.nuetral.white};
    box-shadow: ${({ theme }) => theme.effect.shadow.default.md};
    z-index: 5;
  }
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.s3};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 36px;
`;

export const NavItems = styled.nav`
  position: relative;

  display: grid;
  grid-template-columns: repeat(6, max-content);
  grid-column-gap: 64px;

  & > a,
  & > svg {
    height: ${({ theme }) => theme.spacing.s4};
    cursor: pointer;
  }
`;

export const NavItem = styled(Link)`
  max-height: 36px;
  text-decoration: none;
  cursor: pointer;
`;

export const HomeIcon = styled(HomeSVG)`
  & path {
    fill: ${({ theme }) => theme.color.gray.g5};
  }
`;

export const HomeIconActive = styled(HomeSVG)`
  & path {
    fill: ${({ theme }) => theme.color.primary.dark};
  }
`;

export const ChatIcon = styled(ChatSVG)`
  & path {
    fill: ${({ theme }) => theme.color.gray.g5};
  }
`;

export const ChatIconActive = styled(ChatSVG)`
  & path {
    fill: ${({ theme }) => theme.color.primary.dark};
  }
`;

export const ProfileIcon = styled(ProfileSVG)`
  & path {
    fill: ${({ theme }) => theme.color.gray.g5};
  }
`;

export const ProfileIconActive = styled(ProfileSVG)`
  & path {
    fill: ${({ theme }) => theme.color.primary.dark};
  }
`;

export const NotificationsIcon = styled(NotificationsSVG)`
  & path {
    fill: ${({ theme }) => theme.color.gray.g5};
  }
`;

export const AddPostIcon = styled(AddPostSVG)`
  & path {
    fill: ${({ theme }) => theme.color.gray.g5};
  }
`;

export const AddPostIconActive = styled(AddPostSVG)`
  & path {
    fill: ${({ theme }) => theme.color.primary.dark};
  }
`;

export const MenuIcon = styled(MenuSVG)`
  & path {
    fill: ${({ theme }) => theme.color.gray.g5};
  }
`;
