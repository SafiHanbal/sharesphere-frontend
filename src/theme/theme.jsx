import breakpoint from './breakpoint';
import color from './color';
import effect from './effect';
import fontFamily from './font-family';
import fontSize from './font-size';
import spacing from './spacing';

const visibleHeight = window.innerHeight;

const theme = {
  breakpoint,
  color,
  effect,
  fontFamily,
  fontSize,
  spacing,
  visibleHeight: `${visibleHeight}px`,
};

export default theme;
