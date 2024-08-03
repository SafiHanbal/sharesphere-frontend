import styled, { css } from 'styled-components';

const BaseLine = css`
  background-color: ${({ theme }) => theme.color.gray.g3};
  width: 100%;
`;

export const LineThin = styled.div`
  ${BaseLine}
  height: 1px;
`;

export const LineMedium = styled.div`
  ${BaseLine}
  height: 2px;
`;

export const LineBold = styled.div`
  ${BaseLine}
  height: 3px;
`;
