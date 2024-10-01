import styled from 'styled-components';

import BackSVG from '../../assets/icons/arrow-left.svg?react';
import VideoCallSVG from '../../assets/icons/camera-video.svg?react';
import AudioCallSVG from '../../assets/icons/telephone.svg?react';

import { PB14Styles, PR12Styles } from '../../utils/typography/body.styles';
import { LR14Styles } from '../../utils/typography/label.styles';

export const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.color.gray.g5};
  background-color: ${({ theme }) => theme.color.nuetral.white};
  padding: ${({ theme }) => theme.spacing.s3} ${({ theme }) => theme.spacing.s4};
  box-shadow: ${({ theme }) => theme.effect.shadow.offset.sl};
  align-items: center;
  z-index: 4;

  display: grid;
  grid-template-columns: repeat(2, max-content) 1fr repeat(2, max-content);
  grid-column-gap: ${({ theme }) => theme.spacing.s3};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    grid-template-columns: max-content 1fr repeat(2, max-content);
  }
`;

export const BackIcon = styled(BackSVG)`
  cursor: pointer;

  & path {
    fill: ${({ theme }) => theme.color.gray.g9};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    display: none;
  }
`;

export const Name = styled.p`
  ${PB14Styles}
`;

export const ActiveStatus = styled.p`
  ${PR12Styles}
  font-size: 10px;
`;

export const TypingText = styled(ActiveStatus)`
  color: ${({ theme }) => theme.color.primary.dark};
`;

export const VideoCallIcon = styled(VideoCallSVG)`
  cursor: pointer;

  & path {
    fill: ${({ theme }) => theme.color.gray.g9};
  }
`;

export const AudioCallIcon = styled(AudioCallSVG)`
  cursor: pointer;

  & path {
    fill: ${({ theme }) => theme.color.gray.g9};
  }
`;

export const Main = styled.div`
  height: calc(${({ theme }) => theme.visibleHeight} - 69px);
`;

export const ChatArea = styled.div`
  height: calc(${({ theme }) => theme.visibleHeight} - 141px);
  padding: ${({ theme }) => theme.spacing.s3};
  padding-bottom: 0;

  display: flex;
  flex-direction: column;
  overflow: scroll;

  /* width */
  &::-webkit-scrollbar {
    width: 1px;
    height: 0;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.gray.g4};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    height: calc(${({ theme }) => theme.visibleHeight} - 240px);
  }
`;

const ChatText = styled.p`
  ${LR14Styles}

  padding: ${({ theme }) => theme.spacing.s2};
  border-radius: ${({ theme }) => theme.spacing.s1};
  margin-bottom: ${({ theme }) => theme.spacing.s2};
  box-shadow: ${({ theme }) => theme.effect.shadow.default.sd};
  max-width: 30ch;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabPort}) {
    max-width: 40ch;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    max-width: 50ch;
  }
`;

export const MyChat = styled(ChatText)`
  background-color: ${({ theme }) => theme.color.nuetral.white};
  align-self: flex-end;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    background-color: ${({ theme }) => theme.color.gray.g1};
  }
`;

export const OtherChat = styled(ChatText)`
  background-color: ${({ theme }) => theme.color.primary.light};
  align-self: flex-start;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr max-content;
  column-gap: ${({ theme }) => theme.spacing.s3};
  padding: ${({ theme }) => theme.spacing.s3};
`;
