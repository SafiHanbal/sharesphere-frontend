import styled from 'styled-components';

const BaseAvatar = styled.img`
  border-radius: 50%;
`;

export const SmallAvatar = styled(BaseAvatar)`
  height: 48px;
  width: 48px;
  box-shadow: ${({ theme }) => theme.effect.shadow.default.sd};
`;

export const MediumAvatar = styled(BaseAvatar)`
  height: 72px;
  width: 72px;
  box-shadow: ${({ theme }) => theme.effect.shadow.default.sd};
`;

export const LargeAvatar = styled(BaseAvatar)`
  height: 104px;
  width: 104px;
  box-shadow: ${({ theme }) => theme.effect.shadow.default.ml};
`;

export const ExtraLargeAvatar = styled(BaseAvatar)`
  height: 200px;
  width: 200px;
  box-shadow: ${({ theme }) => theme.effect.shadow.default.md};
`;
