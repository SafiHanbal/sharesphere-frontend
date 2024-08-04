import styled from 'styled-components';

import { LB14Styles } from '../../utils/typography/label.styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  ${LB14Styles}

  color: ${({ theme }) => theme.color.gray.g5};
`;
