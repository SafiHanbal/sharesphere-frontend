import styled, { css } from 'styled-components';

import PhoneSVG from '../../assets/icons/telephone-fill.svg?react';
import VideoSVG from '../../assets/icons/camera-video-fill.svg?react';
import CloseSVG from '../../assets/icons/x.svg?react';

import { H3Styles } from '../../utils/typography/heading.styles';
import { LB14Styles } from '../../utils/typography/label.styles';

export const Container = styled.div`
  height: 100vh;
  padding: ${({ theme }) => theme.spacing.s3};
  text-align: center;
  max-width: 500px;
  margin: 0 auto;

  display: grid;
  grid-template-rows: max-content 1fr max-content;
  grid-row-gap: ${({ theme }) => theme.spacing.s7};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    height: fit-content;
    width: 500px;
    grid-template-rows: repeat(3, max-content);
    background-color: ${({ theme }) => theme.color.nuetral.white};
    box-shadow: ${({ theme }) => theme.effect.shadow.default.md};
    border-radius: ${({ theme }) => theme.spacing.s2};
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  display: block;
`;

export const InfoContainer = styled.div`
  & > img {
    margin-bottom: ${({ theme }) => theme.spacing.s2};
  }
`;

export const Name = styled.h3`
  ${H3Styles}

  letter-spacing: .1px;
  color: ${({ theme }) => theme.color.nuetral.black};
`;

export const Text = styled.p`
  ${LB14Styles}

  color: ${({ theme }) => theme.color.gray.g7};
`;

export const SmallScreenBtnContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    display: none;
  }
`;

export const LargeScreenBtnContainer = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    display: block;

    & > *:not(:last-child) {
      margin-bottom: ${({ theme }) => theme.spacing.s3};
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: ${({ theme }) => theme.spacing.s5};
  margin-top: 0;
`;

export const SingleButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.s5};
`;

const BaseButtonStyles = css`
  border: none;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.effect.shadow.offset.ml};
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    ${LB14Styles}

    display: block;
    width: 100%;
    height: ${({ theme }) => theme.spacing.s6};

    color: ${({ theme }) => theme.color.nuetral.white};
    text-shadow: ${({ theme }) => theme.effect.shadow.default.md};
    border-radius: ${({ theme }) => theme.spacing.s1};
    box-shadow: ${({ theme }) => theme.effect.shadow.offset.sd};
  }
`;

export const AcceptButton = styled.button`
  ${BaseButtonStyles}

  background-color: ${({ theme }) => theme.color.success.dark};
`;

export const AcceptAudioIcon = styled(PhoneSVG)`
  height: ${({ theme }) => theme.spacing.s5};
  width: ${({ theme }) => theme.spacing.s5};

  & path {
    fill: ${({ theme }) => theme.color.nuetral.white};
  }
`;

export const AcceptVidioIcon = styled(VideoSVG)`
  height: ${({ theme }) => theme.spacing.s5};
  width: ${({ theme }) => theme.spacing.s5};

  & path {
    fill: ${({ theme }) => theme.color.nuetral.white};
  }
`;

export const RejectButton = styled.button`
  ${BaseButtonStyles}

  background-color: ${({ theme }) => theme.color.error.dark};
`;

export const RejectIcon = styled(CloseSVG)`
  height: ${({ theme }) => theme.spacing.s6};
  width: ${({ theme }) => theme.spacing.s6};

  & path {
    fill: ${({ theme }) => theme.color.nuetral.white};
  }
`;
