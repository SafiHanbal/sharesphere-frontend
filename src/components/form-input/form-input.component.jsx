import { INPUT_TYPES } from './form-input.types';

import DefaultInput from './default-input/default-input.component';
import SearchInput from './search-input/search-input.component';
import PasswordInput from './password-input/password-input.component';
import DateInput from './date-input/date-input.component';

import {
  Container,
  LabelContainer,
  Label,
  OptionalLabelContainer,
  OptionalLabel,
  LabelIcon,
  InputContainer,
  ResponseContainer,
  ErrorIcon,
  ErrorMsg,
} from './form-input.styles';

const getInput = (inputType) =>
  ({
    [INPUT_TYPES.DEFAULT]: DefaultInput,
    [INPUT_TYPES.SEARCH]: SearchInput,
    [INPUT_TYPES.PASSWORD]: PasswordInput,
    [INPUT_TYPES.DATE]: DateInput,
  }[inputType]);

const FormInput = ({
  label,
  optionalLabel,
  labelIcon,
  type = 'text',
  inputType = INPUT_TYPES.DEFAULT,
  name,
  value,
  onChangeHandler,
  errorMsg,
  placeholder,
}) => {
  const CustomInput = getInput(inputType);

  return (
    <Container>
      {label && (
        <LabelContainer>
          <Label>{label}</Label>
          <OptionalLabelContainer>
            {optionalLabel && <OptionalLabel>{optionalLabel}</OptionalLabel>}
            {labelIcon && <LabelIcon />}
          </OptionalLabelContainer>
        </LabelContainer>
      )}

      <InputContainer>
        <CustomInput
          type={type}
          name={name}
          value={value}
          onChange={onChangeHandler}
          placeholder={placeholder && placeholder}
        />
      </InputContainer>

      {errorMsg && (
        <ResponseContainer>
          <ErrorIcon />
          <ErrorMsg>{errorMsg}</ErrorMsg>
        </ResponseContainer>
      )}
    </Container>
  );
};

export default FormInput;
