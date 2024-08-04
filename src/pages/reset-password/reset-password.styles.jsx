import styled from 'styled-components';

import { H4Styles } from '../../utils/typography/heading.styles';

export const Container = styled.div`
  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s4};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 100%;
  }
`;

export const GetOTPContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-column-gap: ${({ theme }) => theme.spacing.s3};

  & > button {
    margin-top: 25px;
  }
`;

export const Form = styled.form`
  & > button {
    width: 100%;
  }

  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s3};
  }
`;

export const Heading = styled.h4`
  ${H4Styles}
`;
