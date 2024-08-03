import styled from 'styled-components';

import { LB14Styles } from '../../utils/typography/label.styles';
import { PR12Styles } from '../../utils/typography/body.styles';

import LabelIconSVG from '../../assets/icons/info-circle.svg?react';
import ErrorIconSVG from '../../assets/icons/warning.svg?react';

export const Container = styled.div`
  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s2};
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.label`
  ${LB14Styles}
`;

export const OptionalLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OptionalLabel = styled.p`
  ${LB14Styles}

  color: ${({ theme }) => theme.color.gray.g5};
`;

export const LabelIcon = styled(LabelIconSVG)`
  height: ${({ theme }) => theme.spacing.s3};
  width: ${({ theme }) => theme.spacing.s3};
  margin-left: ${({ theme }) => theme.spacing.s2};

  & path {
    fill: ${({ theme }) => theme.color.gray.g7};
  }
`;

export const InputContainer = styled.div`
  position: relative;
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
