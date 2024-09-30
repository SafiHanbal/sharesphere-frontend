import styled from 'styled-components';

import { H4Styles } from '../../utils/typography/heading.styles';
import { LB16Styles } from '../../utils/typography/label.styles';

import SendSVG from '../../assets/icons/send.svg?react';

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.s3};

  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 74px;

  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s3};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    height: calc(${({ theme }) => theme.visibleHeight} - 68px);
    margin-bottom: 0;
  }
`;

export const Header = styled.header`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: 36px;
`;

export const LineContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    display: none;
  }
`;

export const PostContainer = styled.div`
  background-color: ${({ theme }) => theme.color.nuetral.white};
  border-radius: ${({ theme }) => theme.spacing.s2};
  box-shadow: ${({ theme }) => theme.effect.shadow.default.md};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    height: 100%;
  }
`;

export const Heading = styled.h4`
  ${H4Styles}

  padding: ${({ theme }) => theme.spacing.s3};
`;

export const CommentContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    border-left: 1px solid ${({ theme }) => theme.color.gray.g5};
  }
`;

export const CommentList = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacing.s3};

  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s3};
  }

  overflow: scroll;
  height: calc(${({ theme }) => theme.visibleHeight} - 227px);

  /* width */
  &::-webkit-scrollbar {
    width: 1px;
    height: 0;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.gray.g4};
  }
`;

export const NoCommentText = styled.p`
  ${LB16Styles}

  color: ${({ theme }) => theme.color.gray.g5};
  text-align: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CommentForm = styled.form`
  display: grid;
  grid-template-columns: 1fr max-content;
  column-gap: ${({ theme }) => theme.spacing.s2};

  padding: ${({ theme }) => theme.spacing.s3};
`;

export const SendIcon = styled(SendSVG)`
  margin-right: 0 !important;
  & path {
    fill: ${({ theme }) => theme.color.gray.g9};
  }
`;
