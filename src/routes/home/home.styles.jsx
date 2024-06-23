import styled from 'styled-components';

import { H1Styles } from '../../utils/typography/heading.styles';

export const Container = styled.main`
  min-height: calc(${({ theme }) => theme.visibleHeight} - 74px);
  padding: ${({ theme }) => theme.spacing.s4};
`;

export const Heading1 = styled.h1`
  ${H1Styles}

  color: orangered;
`;
