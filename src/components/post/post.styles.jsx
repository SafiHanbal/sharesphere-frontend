import styled from 'styled-components';

import SendSVG from '../../assets/icons/send.svg?react';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.nuetral.white};
  border-radius: ${({ theme }) => theme.spacing.s2};
  box-shadow: ${({ theme }) => theme.effect.shadow.default.md};
`;

export const CommentContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.s3};
  padding-top: 0;

  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s3};
  }
`;

export const CommentForm = styled.form`
  display: grid;
  grid-template-columns: 1fr max-content;
  column-gap: ${({ theme }) => theme.spacing.s2};

  padding: ${({ theme }) => theme.spacing.s3};
  padding-top: 0;
`;

export const SendIcon = styled(SendSVG)`
  margin-right: 0 !important;
  & path {
    fill: ${({ theme }) => theme.color.gray.g9};
  }
`;
