import styled from 'styled-components';

const BaseAvatar = styled.img`
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.effect.shadow.default.md};
`;

export const SmallAvatar = styled(BaseAvatar)`
  height: 48px;
  width: 48px;
`;

export const MediumAvatar = styled(BaseAvatar)`
  height: 72px;
  width: 72px;
`;

export const LargeAvatar = styled(BaseAvatar)`
  height: 104px;
  width: 104px;
`;

export const ExtraLargeAvatar = styled(BaseAvatar)`
  height: 200px;
  width: 200px;
`;
