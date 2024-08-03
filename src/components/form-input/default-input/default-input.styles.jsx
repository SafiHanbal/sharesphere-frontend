import styled from 'styled-components';

import { LR14Styles, LB14Styles } from '../../../utils/typography/label.styles';

export const Input = styled.input`
  ${LR14Styles}

  width: 100%;
  height: ${({ theme }) => theme.spacing.s6};
  padding: ${({ theme }) => theme.spacing.s2} ${({ theme }) => theme.spacing.s3};
  border-radius: ${({ theme }) => theme.spacing.s1};
  border: 1px solid ${({ theme }) => theme.color.gray.g7};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.gray.g7};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    ${LB14Styles}
    letter-spacing: .5px;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  }
`;
