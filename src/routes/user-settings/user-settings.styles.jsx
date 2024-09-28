import styled from 'styled-components';

import { H4Styles } from '../../utils/typography/heading.styles';
import { PB14Styles, PR12Styles } from '../../utils/typography/body.styles';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 74px;
  padding: ${({ theme }) => theme.spacing.s3};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    margin-bottom: 0;
  }
`;

export const ContentContainer = styled.div`
  max-width: 600px;
`;

export const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.s3};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: 36px;
`;

export const Heading = styled.h4`
  ${H4Styles}
`;

export const ProfilePictureForm = styled.form`
  margin-bottom: ${({ theme }) => theme.spacing.s8};

  & > button {
    width: 100%;
  }

  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s3};
  }
`;

export const AvatarContainer = styled.div`
  text-align: center;
`;

export const Label = styled.label`
  ${PB14Styles}

  display: block;
  color: ${({ theme }) => theme.color.info.dark};
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;
`;

export const Form = styled.form`
  margin-bottom: ${({ theme }) => theme.spacing.s8};

  & > button {
    width: 100%;
  }

  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s3};
  }
`;

export const InfoContainer = styled.div`
  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s2};
  }
`;

export const Info = styled.p`
  ${PR12Styles}
`;
