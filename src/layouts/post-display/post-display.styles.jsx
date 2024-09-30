import styled from 'styled-components';

import LikeSVG from '../../assets/icons/heart.svg?react';
import LikedSVG from '../../assets/icons/heart-fill.svg?react';
import CommentSVG from '../../assets/icons/chat-left.svg?react';
import ShareSVG from '../../assets/icons/share.svg?react';
import SendSVG from '../../assets/icons/send.svg?react';

import { PR12Styles, PB12Styles } from '../../utils/typography/body.styles';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.nuetral.white};
  border-radius: ${({ theme }) => theme.spacing.s2};
  box-shadow: ${({ theme }) => theme.effect.shadow.default.md};
`;

export const HeaderContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.s3};

  & > a {
    padding: 0;
  }
`;

export const InteractionsContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.s3};

  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s2};
  }
`;

export const InteractionsIconContainer = styled.div`
  height: ${({ theme }) => theme.spacing.s4};

  & > *:not(:last-child) {
    height: ${({ theme }) => theme.spacing.s4};
    margin-right: ${({ theme }) => theme.spacing.s4};
  }
`;

export const LikeIcon = styled(LikeSVG)`
  cursor: pointer;

  & path {
    fill: ${({ theme }) => theme.color.gray.g7};
  }
`;

export const LikedIcon = styled(LikedSVG)`
  cursor: pointer;

  & path {
    fill: red;
  }
`;

export const CommentIcon = styled(CommentSVG)`
  cursor: pointer;

  & path {
    fill: ${({ theme }) => theme.color.gray.g7};
  }
`;

export const ShareIcon = styled(ShareSVG)`
  cursor: pointer;

  & path {
    fill: ${({ theme }) => theme.color.gray.g7};
  }
`;

export const LikesCount = styled.p`
  ${PB12Styles}

  color: ${({ theme }) => theme.color.gray.g7};
`;

export const Caption = styled.p`
  ${PR12Styles}

  color: ${({ theme }) => theme.color.gray.g5};
`;

export const CommentForm = styled.form`
  display: grid;
  grid-template-columns: 1fr max-content;
  column-gap: ${({ theme }) => theme.spacing.s2};
`;

export const SendIcon = styled(SendSVG)`
  margin-right: 0 !important;
  & path {
    fill: ${({ theme }) => theme.color.gray.g9};
  }
`;
