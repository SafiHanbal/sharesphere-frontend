import styled from 'styled-components';

import { H4Styles } from '../../utils/typography/heading.styles';
import { LB16Styles } from '../../utils/typography/label.styles';

export const Container = styled.div`
  min-height: calc(${({ theme }) => theme.visibleHeight} - 74px);

  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 74px;

  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s3};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    display: grid;
    grid-template-columns: 4fr 6fr;

    min-height: auto;
    height: calc(${({ theme }) => theme.visibleHeight} - 100px);
    margin: ${({ theme }) => theme.spacing.s3};
    overflow: hidden;

    background-color: ${({ theme }) => theme.color.nuetral.white};
    box-shadow: ${({ theme }) => theme.effect.shadow.default.md};
    border-radius: ${({ theme }) => theme.spacing.s2};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin: ${({ theme }) => theme.spacing.s3} auto;
  }
`;

export const ChatList = styled.div`
  padding: ${({ theme }) => theme.spacing.s3};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    border-right: 1px solid ${({ theme }) => theme.color.gray.g3};
  }

  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s3};
  }
`;

export const Heading = styled.h4`
  ${H4Styles}
`;

export const SingleChatContainer = styled.div`
  display: none;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    display: block;
  }
`;

export const NoChatText = styled.p`
  ${LB16Styles}

  color: ${({ theme }) => theme.color.gray.g5};
  text-align: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
