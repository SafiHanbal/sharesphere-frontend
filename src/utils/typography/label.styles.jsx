import { css } from 'styled-components';

const BaseLabel = css`
  color: ${({ theme }) => theme.color.gray.g9};
  font-family: ${({ theme }) => theme.fontFamily.body};
  line-height: 1.25;
`;

export const LR16Styles = css`
  ${BaseLabel}
  font-size: ${({ theme }) => theme.fontSize.fs4};
  font-weight: 400;
`;

export const LB16Styles = css`
  ${BaseLabel}
  font-size: ${({ theme }) => theme.fontSize.fs4};
  font-weight: 500;
`;

export const LR14Styles = css`
  ${BaseLabel}
  font-size: ${({ theme }) => theme.fontSize.fs3};
  font-weight: 400;
`;

export const LB14Styles = css`
  ${BaseLabel}
  font-size: ${({ theme }) => theme.fontSize.fs3};
  font-weight: 500;
`;

export const LR12Styles = css`
  ${BaseLabel}
  font-size: ${({ theme }) => theme.fontSize.fs2};
  font-weight: 400;
`;

export const LB12Styles = css`
  ${BaseLabel}
  font-size: ${({ theme }) => theme.fontSize.fs2};
  font-weight: 500;
`;
