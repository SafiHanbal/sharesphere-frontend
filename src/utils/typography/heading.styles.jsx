import { css } from 'styled-components';

const BaseHeading = css`
  color: ${({ theme }) => theme.color.gray.g9};
  font-family: ${({ theme }) => theme.fontFamily.display};
  font-weight: 600;
  line-height: 1.25;
`;

export const H1Styles = css`
  ${BaseHeading}
  font-size: ${({ theme }) => theme.fontSize.fs8};
`;

export const H2Styles = css`
  ${BaseHeading}
  font-size: ${({ theme }) => theme.fontSize.fs7};
`;

export const H3Styles = css`
  ${BaseHeading}
  font-size: ${({ theme }) => theme.fontSize.fs6};
`;

export const H4Styles = css`
  ${BaseHeading}
  font-size: ${({ theme }) => theme.fontSize.fs5};
`;

export const H5Styles = css`
  ${BaseHeading}
  font-size: ${({ theme }) => theme.fontSize.fs3};
`;
