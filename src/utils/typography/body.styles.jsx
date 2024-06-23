import { css } from 'styled-components';

const BaseParagraph = css`
  color: ${({ theme }) => theme.color.gray.g9};
  font-family: ${({ theme }) => theme.fontFamily.body};
  line-height: 1.5;
`;

export const PR16Styles = css`
  ${BaseParagraph}
  font-size: ${({ theme }) => theme.fontSize.fs4};
  font-weight: 400;
`;

export const PB16Styles = css`
  ${BaseParagraph}
  font-size: ${({ theme }) => theme.fontSize.fs4};
  font-weight: 500;
`;

export const PR14Styles = css`
  ${BaseParagraph}
  font-size: ${({ theme }) => theme.fontSize.fs3};
  font-weight: 400;
`;

export const PB14Styles = css`
  ${BaseParagraph}
  font-size: ${({ theme }) => theme.fontSize.fs3};
  font-weight: 500;
`;

export const PR12Styles = css`
  ${BaseParagraph}
  font-size: ${({ theme }) => theme.fontSize.fs2};
  font-weight: 400;
`;

export const PB12Styles = css`
  ${BaseParagraph}
  font-size: ${({ theme }) => theme.fontSize.fs2};
  font-weight: 500;
`;
