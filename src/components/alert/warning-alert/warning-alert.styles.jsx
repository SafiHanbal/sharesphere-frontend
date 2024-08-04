import styled from 'styled-components';
import { BaseContainer, BaseHeading, BaseMessage } from '../alert.styles';

export const WarningContainer = styled(BaseContainer)`
  border-left: ${({ theme }) => theme.spacing.s1} solid
    ${({ theme }) => theme.color.warning.dark};
`;

export const WarningHeading = styled(BaseHeading)`
  color: ${({ theme }) => theme.color.warning.dark};
`;

export const WarningMessage = styled(BaseMessage)`
  color: ${({ theme }) => theme.color.gray.g5};
`;
