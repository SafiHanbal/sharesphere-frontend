import styled from 'styled-components';
import { H4Styles } from '../../utils/typography/heading.styles';

export const Container = styled.div`
  min-height: calc(${({ theme }) => theme.visibleHeight} - 74px);

  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s3};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    min-height: calc(${({ theme }) => theme.visibleHeight} - 148px);
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-column-gap: ${({ theme }) => theme.spacing.s3};
`;

export const Heading = styled.h4`
  ${H4Styles}
`;
