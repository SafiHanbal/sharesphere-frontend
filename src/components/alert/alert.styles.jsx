import styled from 'styled-components';
import { H5Styles } from '../../utils/typography/heading.styles';
import { PR12Styles } from '../../utils/typography/body.styles';

import { ReactComponent as CloseIconSVG } from '../../assets/icons/x.svg';

// Base Styles
const BaseContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.nuetral.white};
  padding: ${({ theme }) => theme.spacing.s3};
  border-radius: ${({ theme }) => theme.spacing.s2};
  box-shadow: ${({ theme }) => theme.effects.shadow.offset.sl};
`;

const BaseHeading = styled.h4`
  ${H5Styles}

  font-family: ${({ theme }) => theme.fontFamily.body};
  margin-bottom: ${({ theme }) => theme.spacing.s1};
`;

const BaseMessage = styled.p`
  ${PR12Styles}
`;

export const CloseIcon = styled(CloseIconSVG)`
  position: absolute;
  right: ${({ theme }) => theme.spacing.s2};
  top: ${({ theme }) => theme.spacing.s2};

  & path {
    fill: ${({ theme }) => theme.color.gray.g7};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    right: ${({ theme }) => theme.spacing.s3};
    top: 50%;
    transform: translateY(-50%);
  }
`;

// Error Styles
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

// Success Styles
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

// Warning Styles
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

// Info Styles
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
