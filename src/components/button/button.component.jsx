import { BUTTON_TYPES } from './button.types';

import {
  PrimarySmallFill,
  PrimarySmallOutline,
  PrimarySmallLink,
  SecondarySmallFill,
  SecondarySmallOutline,
  SecondarySmallLink,
  PrimarySmallDisabled,
  SecondarySmallDisabled,
} from './button.styles';

const getButton = (buttonType = BUTTON_TYPES.PRIMARY_SMALL_FILL) =>
  ({
    [BUTTON_TYPES.PRIMARY_SMALL_FILL]: PrimarySmallFill,
    [BUTTON_TYPES.PRIMARY_SMALL_OUTLINE]: PrimarySmallOutline,
    [BUTTON_TYPES.PRIMARY_SMALL_LINK]: PrimarySmallLink,

    [BUTTON_TYPES.SECONDARY_SMALL_FILL]: SecondarySmallFill,
    [BUTTON_TYPES.SECONDARY_SMALL_OUTLINE]: SecondarySmallOutline,
    [BUTTON_TYPES.SECONDARY_SMALL_LINK]: SecondarySmallLink,
  }[buttonType]);

const getDisabledButton = (buttonType) =>
  ({
    [BUTTON_TYPES.PRIMARY_SMALL_FILL]: PrimarySmallDisabled,
    [BUTTON_TYPES.SECONDARY_SMALL_FILL]: SecondarySmallDisabled,
  }[buttonType]);

const Button = ({
  children,
  buttonType = BUTTON_TYPES.PRIMARY_SMALL_FILL,
  disabled = false,
  ...otherProps
}) => {
  let CustomButton;
  if (disabled) CustomButton = getDisabledButton(buttonType);
  else CustomButton = getButton(buttonType);

  return (
    <CustomButton disabled={disabled} {...otherProps}>
      {children}
    </CustomButton>
  );
};

export default Button;
