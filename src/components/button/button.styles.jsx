import styled from 'styled-components';

import { LB14Styles } from '../../utils/typography/label.styles';

const BaseButton = styled.button`
  ${LB14Styles}

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 ${({ theme }) => theme.spacing.s3};
  border: none;
  border-radius: ${({ theme }) => theme.spacing.s1};

  cursor: pointer;

  /* Small Button Styles */
  height: ${({ theme }) => theme.spacing.s6};
  padding: 0 ${({ theme }) => theme.spacing.s3};

  & svg {
    height: 20px;
    width: 20px;
  }

  /* Icon Styles */
  & svg {
    margin-right: ${({ theme }) => theme.spacing.s2};
  }

  & path {
    fill: currentColor;
  }
`;

export const PrimarySmallFill = styled(BaseButton)`
  color: ${({ theme }) => theme.color.nuetral.white};
  background-color: ${({ theme }) => theme.color.primary.dark};
  box-shadow: ${({ theme }) => theme.effect.shadow.offset.sl};
`;

export const PrimarySmallOutline = styled(BaseButton)`
  color: ${({ theme }) => theme.color.primary.dark};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.primary.dark};
`;

export const PrimarySmallLink = styled(BaseButton)`
  color: ${({ theme }) => theme.color.primary.dark};
  background-color: transparent;
`;

export const PrimarySmallDisabled = styled(BaseButton)`
  color: ${({ theme }) => theme.color.nuetral.white};
  background-color: ${({ theme }) => theme.color.primary.medium};
  box-shadow: ${({ theme }) => theme.effect.shadow.offset.sl};
  cursor: not-allowed;
`;

export const SecondarySmallFill = styled(BaseButton)`
  color: ${({ theme }) => theme.color.nuetral.white};
  background-color: ${({ theme }) => theme.color.nuetral.black};
  box-shadow: ${({ theme }) => theme.effect.shadow.offset.sl};
`;

export const SecondarySmallOutline = styled(BaseButton)`
  color: ${({ theme }) => theme.color.nuetral.black};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.nuetral.black};
`;

export const SecondarySmallLink = styled(BaseButton)`
  color: ${({ theme }) => theme.color.nuetral.black};
  background-color: transparent;
`;

export const SecondarySmallDisabled = styled(BaseButton)`
  color: ${({ theme }) => theme.color.nuetral.white};
  background-color: ${({ theme }) => theme.color.gray.g4};
  box-shadow: ${({ theme }) => theme.effect.shadow.offset.sl};
  cursor: not-allowed;
`;
