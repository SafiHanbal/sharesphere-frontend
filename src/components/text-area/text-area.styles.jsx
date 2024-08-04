import styled from 'styled-components';

import ErrorIconSVG from '../../assets/icons/warning.svg?react';
import { LB14Styles, LR14Styles } from '../../utils/typography/label.styles';
import { PR12Styles } from '../../utils/typography/body.styles';

export const Container = styled.div`
  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s2};
  }
`;

export const Label = styled.label`
  ${LB14Styles}

  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.s2};
`;

export const TextAreaInput = styled.textarea`
  ${LR14Styles}

  width: 100%;
  padding: ${({ theme }) => theme.spacing.s3};
  border-radius: ${({ theme }) => theme.spacing.s1};
  border: 1px solid ${({ theme }) => theme.color.gray.g7};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.gray.g7};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    ${LB14Styles}
    letter-spacing: .5px;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  }
`;

export const ResponseContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
`;

export const ErrorIcon = styled(ErrorIconSVG)`
  height: ${({ theme }) => theme.spacing.s3};
  width: ${({ theme }) => theme.spacing.s3};
  margin-right: ${({ theme }) => theme.spacing.s2};
  margin-top: 1px;

  & path {
    fill: ${({ theme }) => theme.color.error.medium};
  }
`;

export const ErrorMsg = styled.p`
  ${PR12Styles}
  color: ${({ theme }) => theme.color.error.medium};
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;
