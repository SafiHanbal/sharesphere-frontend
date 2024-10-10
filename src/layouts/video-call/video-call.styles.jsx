import styled from 'styled-components';
import { LB14Styles } from '../../utils/typography/label.styles';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  max-width: 450px;
  padding: ${({ theme }) => theme.spacing.s3};
  text-align: center;
  max-width: 500px;
  margin: 0 auto;

  display: grid;
  grid-template-rows: max-content 1fr max-content;
  grid-row-gap: ${({ theme }) => theme.spacing.s3};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    height: 95vh;
    width: 450px;
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

export const Text = styled.p`
  ${LB14Styles}

  color: ${({ theme }) => theme.color.gray.g7};
`;

export const IncomingVideo = styled.div`
  background-color: #cfcfcf;
  border-radius: ${({ theme }) => theme.spacing.s2};
`;

export const OutgoingVideo = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacing.s3};
  bottom: ${({ theme }) => theme.spacing.s3};
  height: 200px;
  width: 130px;

  background-color: #cfcfcf;
  border: 1px solid ${({ theme }) => theme.color.gray.g5};
  border-radius: ${({ theme }) => theme.spacing.s2};
  box-shadow: ${({ theme }) => theme.effect.shadow.offset.sl};
`;

export const EndCallButton = styled.button`
  display: block;
  height: ${({ theme }) => theme.spacing.s6};
  width: calc(100% - 146px);
  margin-left: auto;

  border: none;
  border-radius: ${({ theme }) => theme.spacing.s1};
  box-shadow: ${({ theme }) => theme.effect.shadow.offset.sd};
  background-color: ${({ theme }) => theme.color.error.dark};

  ${LB14Styles}
  color: ${({ theme }) => theme.color.nuetral.white};
  text-shadow: ${({ theme }) => theme.effect.shadow.default.md};
  cursor: pointer;
`;
