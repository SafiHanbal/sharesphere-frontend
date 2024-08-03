import { useState } from 'react';

import { Input, ShowIcon, HideIcon } from './password-input.styles';

const PasswordInput = ({ ...inputProps }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const toggleIsPasswordVisible = () =>
    setIsPasswordVisible(!isPasswordVisible);

  return (
    <>
      <Input type={isPasswordVisible ? 'text' : 'password'} {...inputProps} />

      {isPasswordVisible && <HideIcon onClick={toggleIsPasswordVisible} />}
      {!isPasswordVisible && <ShowIcon onClick={toggleIsPasswordVisible} />}
    </>
  );
};

export default PasswordInput;
