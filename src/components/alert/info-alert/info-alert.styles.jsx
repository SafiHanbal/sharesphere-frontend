import styled from 'styled-components';
import { BaseContainer, BaseHeading, BaseMessage } from '../alert.styles';

export const InfoContainer = styled(BaseContainer)`
  border-left: ${({ theme }) => theme.spacing.s1} solid
    ${({ theme }) => theme.color.info.medium};
`;

export const InfoHeading = styled(BaseHeading)`
  color: ${({ theme }) => theme.color.info.medium};
`;

export const InfoMessage = styled(BaseMessage)`
  color: ${({ theme }) => theme.color.gray.g5};
`;
