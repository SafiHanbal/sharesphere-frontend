import styled, { css } from 'styled-components';

import {
  LR16Styles,
  LB16Styles,
  LR14Styles,
  LB14Styles,
} from '../../utils/typography/label.styles';

// Base Button Styles
const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 ${({ theme }) => theme.spacing.s3};
  border: none;
  border-radius: ${({ theme }) => theme.spacing.s1};

  cursor: pointer;
`;

// Button Size Styles
const LargeButtonStyles = css`
  height: ${({ theme }) => theme.spacing.s7};
  padding: 0 ${({ theme }) => theme.spacing.s3};
`;

const SmallButtonStyles = css`
  height: ${({ theme }) => theme.spacing.s6};
  padding: 0 ${({ theme }) => theme.spacing.s3};

  & svg {
    height: 20px;
    width: 20px;
  }
`;

// Button Icon Styles
const IconStyles = css`
  & svg {
    margin-right: ${({ theme }) => theme.spacing.s2};
  }

  & path {
    fill: currentColor;
  }
`;

// Buttons
export const PLFill = styled(BaseButton)`
  ${LB16Styles}
  ${IconStyles}
  ${LargeButtonStyles}

  color: ${({ theme }) => theme.color.nuetral.white};
  background-color: ${({ theme }) => theme.color.primary.dark};
  box-shadow: ${({ theme }) => theme.effects.shadow.offset.sl};
`;

export const PLOutline = styled(BaseButton)`
  ${LR16Styles}
  ${IconStyles}
  ${LargeButtonStyles}

  color: ${({ theme }) => theme.color.primary.dark};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.primary.dark};
`;

export const PLDisable = styled(BaseButton)`
  ${LB16Styles}
  ${IconStyles}
  ${LargeButtonStyles}

  color: ${({ theme }) => theme.color.nuetral.white};
  background-color: ${({ theme }) => theme.color.primary.medium};
  box-shadow: ${({ theme }) => theme.effects.shadow.offset.sl};
`;

export const PSFill = styled(BaseButton)`
  ${LB14Styles}
  ${IconStyles}
  ${SmallButtonStyles}

  color: ${({ theme }) => theme.color.nuetral.white};
  background-color: ${({ theme }) => theme.color.primary.dark};
  box-shadow: ${({ theme }) => theme.effects.shadow.offset.sl};
`;

export const PSOutline = styled(BaseButton)`
  ${LR14Styles}
  ${IconStyles}
  ${SmallButtonStyles}

  color: ${({ theme }) => theme.color.primary.dark};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.primary.dark};
`;

export const PSDisable = styled(BaseButton)`
  ${LB14Styles}
  ${IconStyles}
  ${SmallButtonStyles}

  color: ${({ theme }) => theme.color.nuetral.white};
  background-color: ${({ theme }) => theme.color.primary.medium};
  box-shadow: ${({ theme }) => theme.effects.shadow.offset.sl};
`;

export const PSLink = styled(BaseButton)`
  ${LB14Styles}
  ${IconStyles}
  ${SmallButtonStyles}

  color: ${({ theme }) => theme.color.primary.dark};
  background-color: transparent;
`;

export const SLFill = styled(BaseButton)`
  ${LB16Styles}
  ${IconStyles}
  ${LargeButtonStyles}

  color: ${({ theme }) => theme.color.nuetral.white};
  background-color: ${({ theme }) => theme.color.nuetral.black};
  box-shadow: ${({ theme }) => theme.effects.shadow.offset.sl};
`;

export const SLOutline = styled(BaseButton)`
  ${LR16Styles}
  ${IconStyles}
  ${LargeButtonStyles}

  color: ${({ theme }) => theme.color.nuetral.black};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.nuetral.black};
`;

export const SLDisable = styled(BaseButton)`
  ${LB16Styles}
  ${IconStyles}
  ${LargeButtonStyles}

  color: ${({ theme }) => theme.color.nuetral.white};
  background-color: ${({ theme }) => theme.color.gray.g4};
  box-shadow: ${({ theme }) => theme.effects.shadow.offset.sl};
`;

export const SSFill = styled(BaseButton)`
  ${LB14Styles}
  ${IconStyles}
  ${SmallButtonStyles}

  color: ${({ theme }) => theme.color.nuetral.white};
  background-color: ${({ theme }) => theme.color.nuetral.black};
  box-shadow: ${({ theme }) => theme.effects.shadow.offset.sl};
`;

export const SSOutline = styled(BaseButton)`
  ${LR14Styles}
  ${IconStyles}
  ${SmallButtonStyles}

  color: ${({ theme }) => theme.color.nuetral.black};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.nuetral.black};
`;

export const SSDisable = styled(BaseButton)`
  ${LB14Styles}
  ${IconStyles}
  ${SmallButtonStyles}

  color: ${({ theme }) => theme.color.nuetral.white};
  background-color: ${({ theme }) => theme.color.gray.g4};
  box-shadow: ${({ theme }) => theme.effects.shadow.offset.sl};
`;

export const SSLink = styled(BaseButton)`
  ${LB14Styles}
  ${IconStyles}
  ${SmallButtonStyles}

  color: ${({ theme }) => theme.color.nuetral.black};
  background-color: transparent;
`;
