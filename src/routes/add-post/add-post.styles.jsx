import styled from 'styled-components';

import { H4Styles } from '../../utils/typography/heading.styles';
import { LB12Styles, LB14Styles } from '../../utils/typography/label.styles';

import ImagesIconSVG from '../../assets/icons/images.svg?react';

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

  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s3};
  }
`;

export const Header = styled.header`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: 36px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Heading = styled.h4`
  ${H4Styles}
`;

export const RemoveButton = styled.p`
  ${LB12Styles}

  color: ${({ theme }) => theme.color.error.dark};
  cursor: pointer;
`;

export const Form = styled.form`
  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s3};
  }
`;

export const ImagesInput = styled.input`
  display: none;
`;

export const StyledImagesInput = styled.button`
  ${LB14Styles}

  position: relative;
  display: block;
  color: ${({ theme }) => theme.color.gray.g9};
  width: 100%;
  padding-bottom: 75%;
  border-radius: ${({ theme }) => theme.spacing.s1};
  border: 1px solid ${({ theme }) => theme.color.gray.g7};
  cursor: pointer;
`;

export const InputContnetContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ImagesIcon = styled(ImagesIconSVG)`
  height: ${({ theme }) => theme.spacing.s6};
  width: ${({ theme }) => theme.spacing.s6};
  margin-bottom: ${({ theme }) => theme.spacing.s2};

  & path {
    fill: ${({ theme }) => theme.color.gray.g8};
  }
`;

export const CarouselContainer = styled.div`
  box-shadow: ${({ theme }) => theme.effect.shadow.default.ml};
`;
