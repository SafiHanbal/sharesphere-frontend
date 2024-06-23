import styled from 'styled-components';

import { ReactComponent as LabelIconSVG } from '../../assets/icons/info-circle.svg';
import { ReactComponent as ErrorIconSVG } from '../../assets/icons/warning.svg';
import { ReactComponent as SuccessIconSVG } from '../../assets/icons/checkmark.svg';
import { ReactComponent as SearchIconSVG } from '../../assets/icons/search.svg';
import { ReactComponent as CalendarIconSVG } from '../../assets/icons/calendar4.svg';
import { ReactComponent as ShowIconSVG } from '../../assets/icons/eye-fill.svg';
import { ReactComponent as HideIconSVG } from '../../assets/icons/eye-slash-fill.svg';

import { LR14Styles, LB14Styles } from '../../utils/typography/label.styles';
import { PR12Styles } from '../../utils/typography/body.styles';

export const Container = styled.div`
  & > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.s2};
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.label`
  ${LB14Styles}
`;

export const OptionalLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OptionalLabel = styled.p`
  ${LB14Styles}

  color: ${({ theme }) => theme.color.gray.g5};
`;

export const LabelIcon = styled(LabelIconSVG)`
  height: ${({ theme }) => theme.spacing.s3};
  width: ${({ theme }) => theme.spacing.s3};
  margin-left: ${({ theme }) => theme.spacing.s2};

  & path {
    fill: ${({ theme }) => theme.color.gray.g7};
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const SearchIcon = styled(SearchIconSVG)`
  position: absolute;
  left: ${({ theme }) => theme.spacing.s3};
  top: 50%;
  transform: translateY(-50%);

  & path {
    fill: ${({ theme }) => theme.color.gray.g7};
  }
`;

export const CalendarIcon = styled(CalendarIconSVG)`
  position: absolute;
  left: ${({ theme }) => theme.spacing.s3};
  top: 50%;
  transform: translateY(-50%);

  & path {
    fill: ${({ theme }) => theme.color.gray.g7};
  }
`;

export const Input = styled.input`
  ${LR14Styles}

  width: 100%;
  height: ${({ theme }) => theme.spacing.s6};
  padding: ${({ theme }) => theme.spacing.s2} ${({ theme }) => theme.spacing.s3};
  border-radius: ${({ theme }) => theme.spacing.s1};
  border: 1px solid ${({ theme }) => theme.color.gray.g7};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.gray.g7};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    ${LB14Styles}
    letter-spacing: .5px;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  }
`;

export const LeftIconInput = styled(Input)`
  padding: ${({ theme }) => theme.spacing.s2} ${({ theme }) => theme.spacing.s3}
    ${({ theme }) => theme.spacing.s2} ${({ theme }) => theme.spacing.s7};
`;

export const RightIconInput = styled(Input)`
  padding: ${({ theme }) => theme.spacing.s2} ${({ theme }) => theme.spacing.s7}
    ${({ theme }) => theme.spacing.s2} ${({ theme }) => theme.spacing.s3};
`;

export const ShowIcon = styled(ShowIconSVG)`
  position: absolute;
  right: ${({ theme }) => theme.spacing.s3};
  top: 50%;
  transform: translateY(-50%);

  & path {
    fill: ${({ theme }) => theme.color.gray.g7};
  }
`;

export const HideIcon = styled(HideIconSVG)`
  position: absolute;
  right: ${({ theme }) => theme.spacing.s3};
  top: 50%;
  transform: translateY(-50%);

  & path {
    fill: ${({ theme }) => theme.color.gray.g7};
  }
`;

export const ResponseContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ErrorIcon = styled(ErrorIconSVG)`
  height: ${({ theme }) => theme.spacing.s3};
  width: ${({ theme }) => theme.spacing.s3};
  margin-right: ${({ theme }) => theme.spacing.s2};

  & path {
    fill: ${({ theme }) => theme.color.error.medium};
  }
`;

export const ErrorMsg = styled.p`
  ${PR12Styles}
  color: ${({ theme }) => theme.color.error.medium};
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;

export const SuccessIcon = styled(SuccessIconSVG)`
  height: ${({ theme }) => theme.spacing.s3};
  width: ${({ theme }) => theme.spacing.s3};
  margin-right: ${({ theme }) => theme.spacing.s2};

  & path {
    fill: ${({ theme }) => theme.color.success.dark};
  }
`;

export const SuccessMsg = styled.p`
  ${PR12Styles}
  color: ${({ theme }) => theme.color.success.dark};
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;
