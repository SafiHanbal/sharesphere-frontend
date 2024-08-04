import styled from 'styled-components';
import { BaseContainer, BaseHeading, BaseMessage } from '../alert.styles';

export const SuccessContainer = styled(BaseContainer)`
  border-left: ${({ theme }) => theme.spacing.s1} solid
    ${({ theme }) => theme.color.success.dark};
`;

export const SuccessHeading = styled(BaseHeading)`
  color: ${({ theme }) => theme.color.success.dark};
`;

export const SuccessMessage = styled(BaseMessage)`
  color: ${({ theme }) => theme.color.gray.g5};
`;
