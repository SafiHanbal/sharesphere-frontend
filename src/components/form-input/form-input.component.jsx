import { useState, useRef } from 'react';

import {
  Container,
  LabelContainer,
  Label,
  OptionalLabelContainer,
  OptionalLabel,
  LabelIcon,
  InputContainer,
  SearchIcon,
  CalendarIcon,
  Input,
  LeftIconInput,
  RightIconInput,
  ShowIcon,
  HideIcon,
  ResponseContainer,
  ErrorIcon,
  ErrorMsg,
  SuccessIcon,
  SuccessMsg,
} from './form-input.styles';

export const INPUT_TYPES = {
  DEFAULT: 'DEFAULT',
  LEFT_ICON_INPUT: 'LEFT_ICON_INPUT',
  PASSWORD_INPUT: 'PASSWORD_INPUT',
};

const getInput = (inputType = INPUT_TYPES.DEFAULT) =>
  ({
    [INPUT_TYPES.DEFAULT]: Input,
    [INPUT_TYPES.LEFT_ICON_INPUT]: LeftIconInput,
    [INPUT_TYPES.PASSWORD_INPUT]: RightIconInput,
  }[inputType]);

const FormInput = ({
  label,
  optionalLabel,
  labelIcon = false,
  type = 'text',
  inputType,
  name,
  value,
  onChange,
  errorMsg,
  successMsg,
}) => {
  const inputRef = useRef(null);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState('password');

  const toggleIsPasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
    setPasswordInputType(
      passwordInputType === 'password' ? 'text' : 'password'
    );
    inputRef.current.focus();
  };

  const CustomInput = getInput(inputType);
  return (
    <Container>
      {label && (
        <LabelContainer>
          <Label>{label}</Label>
          <OptionalLabelContainer>
            {optionalLabel && <OptionalLabel>{OptionalLabel}</OptionalLabel>}
            {labelIcon && <LabelIcon />}
          </OptionalLabelContainer>
        </LabelContainer>
      )}

      <InputContainer>
        {type === 'search' && <SearchIcon />}
        {type === 'date' && <CalendarIcon />}

        <CustomInput
          ref={inputRef}
          type={
            inputType === INPUT_TYPES.PASSWORD_INPUT ? passwordInputType : type
          }
          name={name}
          value={value}
          onChange={onChange}
        />

        {inputType === INPUT_TYPES.PASSWORD_INPUT && isPasswordVisible && (
          <HideIcon onClick={toggleIsPasswordVisible} />
        )}
        {inputType === INPUT_TYPES.PASSWORD_INPUT && !isPasswordVisible && (
          <ShowIcon onClick={toggleIsPasswordVisible} />
        )}
      </InputContainer>

      {errorMsg && (
        <ResponseContainer>
          <ErrorIcon />
          <ErrorMsg>{errorMsg}</ErrorMsg>
        </ResponseContainer>
      )}

      {successMsg && (
        <ResponseContainer>
          <SuccessIcon />
          <SuccessMsg>{successMsg}</SuccessMsg>
        </ResponseContainer>
      )}
    </Container>
  );
};

export default FormInput;
