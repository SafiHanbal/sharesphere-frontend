import styled from 'styled-components';
import { BaseContainer, BaseHeading, BaseMessage } from '../alert.styles';

export const ErrorContainer = styled(BaseContainer)`
  border-left: ${({ theme }) => theme.spacing.s1} solid
    ${({ theme }) => theme.color.error.medium};
`;

export const ErrorHeading = styled(BaseHeading)`
  color: ${({ theme }) => theme.color.error.medium};
`;

export const ErrorMessage = styled(BaseMessage)`
  color: ${({ theme }) => theme.color.gray.g5};
`;
