import styled from 'styled-components';
import { LB16Styles } from '../../utils/typography/label.styles';

import NotificationsSVG from '../../assets/icons/bell.svg?react';
import AddPostSVG from '../../assets/icons/plus-square.svg?react';

export const Container = styled.main`
  min-height: calc(${({ theme }) => theme.visibleHeight} - 74px);

  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 74px;
  padding: ${({ theme }) => theme.spacing.s3};

  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s3};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    margin-bottom: 0;
  }
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr repeat(2, max-content);
  column-gap: ${({ theme }) => theme.spacing.s2};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: 36px;
`;

export const NotificationsIcon = styled(NotificationsSVG)`
  height: 36px;
  width: 36px;
  padding: 6px;

  & path {
    fill: ${({ theme }) => theme.color.gray.g9};
  }
`;

export const AddPostIcon = styled(AddPostSVG)`
  height: 36px;
  width: 36px;
  padding: 6px;

  & path {
    fill: ${({ theme }) => theme.color.gray.g9};
  }
`;

export const LineContainer = styled.div`
  grid-column: 1/-1;
  margin-top: 2px;
`;

export const ContentContainer = styled.div`
  max-width: 1050px;
  margin: 0 auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${({ theme }) => theme.spacing.s4};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${({ theme }) => theme.spacing.s10};
  }
`;

export const PostContainer = styled.div`
  position: relative;

  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s4};
  }
`;

export const NoPostText = styled.p`
  ${LB16Styles}

  color: ${({ theme }) => theme.color.gray.g5};
  text-align: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SearchUserContainer = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    position: sticky;
    top: 80px;

    display: block;
    overflow: scroll;

    padding: ${({ theme }) => theme.spacing.s4};
    height: calc(${({ theme }) => theme.visibleHeight} - 100px);
    background-color: ${({ theme }) => theme.color.nuetral.white};
    border-radius: ${({ theme }) => theme.spacing.s2};
    box-shadow: ${({ theme }) => theme.effect.shadow.default.md};

    &::-webkit-scrollbar {
      display: none; /* Hide the scrollbar */
    }
  }
`;
