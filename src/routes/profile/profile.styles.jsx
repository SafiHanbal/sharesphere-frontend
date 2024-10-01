import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { LB16Styles, LR12Styles } from '../../utils/typography/label.styles';

export const Container = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: ${({ theme }) => theme.spacing.s8};

    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 74px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
      margin-bottom: 0;
      margin-top: ${({ theme }) => theme.spacing.s3};
      padding: ${({ theme }) => theme.spacing.s3};
    }
  }
`;

export const Posts = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${({ theme }) => theme.spacing.s2};
  grid-row-gap: ${({ theme }) => theme.spacing.s3};

  padding: ${({ theme }) => theme.spacing.s3};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    padding: 0;
  }
`;

export const NoPostText = styled.p`
  ${LB16Styles}

  color: ${({ theme }) => theme.color.gray.g5};
  text-align: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PostLink = styled(Link)`
  display: block;
  text-decoration: none;
  align-self: self-start;
`;

export const Post = styled.img`
  width: 100%;
`;

export const PostData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LikesCount = styled.p`
  ${LR12Styles}
`;

export const LinkText = styled.p`
  ${LR12Styles}

  text-decoration: underline;
`;

export const InvisibleBox = styled.div`
  width: 100%;
  height: 74px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tabLand}) {
    display: none;
  }
`;
