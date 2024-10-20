import styled from 'styled-components';

import {
  LB14Styles,
  LB12Styles,
  LR12Styles,
} from '../../utils/typography/label.styles';

export const Container = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 18px;
  column-gap: ${({ theme }) => theme.spacing.s2};
`;

export const AvatarContainer = styled.div`
  grid-row: 1/ -1;
`;

export const Name = styled.p`
  ${LB14Styles}

  color: ${({ theme }) => theme.color.gray.g7};
  display: flex;
  align-items: center;
`;

export const Time = styled.span`
  ${LB12Styles}

  font-size: 10px;
  color: ${({ theme }) => theme.color.gray.g5};
  margin-left: ${({ theme }) => theme.spacing.s2};
`;

export const Content = styled.p`
  ${LR12Styles}

  color: ${({ theme }) => theme.color.gray.g7};
  line-height: 1.4;
  grid-column: 2 / -1;
`;
