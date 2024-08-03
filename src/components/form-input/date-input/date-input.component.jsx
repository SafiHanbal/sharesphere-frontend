import { useRef } from 'react';

import { Input, CalendarIcon } from './date-input.styles';

const DateInput = () => {
  const inputRef = useRef(null);

  const focustOnIconClick = () => {
    inputRef.current.showPicker();
  };
  return (
    <>
      <CalendarIcon onClick={focustOnIconClick} />
      <Input ref={inputRef} type="date" />
    </>
  );
};

export default DateInput;
