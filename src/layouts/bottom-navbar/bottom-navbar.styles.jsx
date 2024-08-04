import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HomeSVG from '../../assets/icons/house.svg?react';
import ChatSVG from '../../assets/icons/chat-left.svg?react';
import SearchSVG from '../../assets/icons/search.svg?react';
import ProfileSVG from '../../assets/icons/person.svg?react';

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  bottom: 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  border-top: 1px solid ${({ theme }) => theme.color.primary.dark};
  box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.2);
  z-index: 5;

  /* To hide bottom navbar on larger screen >1200px */
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    display: none;
  }
`;

export const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px 0;
  background-color: ${({ theme }) => theme.color.nuetral.white};
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

export const SearchIcon = styled(SearchSVG)`
  & path {
    fill: ${({ theme }) => theme.color.gray.g5};
  }
`;

export const SearchIconActive = styled(SearchSVG)`
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
