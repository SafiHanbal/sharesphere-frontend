import breakpoint from './breakpoint';
import color from './color';
import effects from './effects';
import fontFamily from './font-family';
import fontSize from './font-size';
import spacing from './spacing';

const visibleHeight = window.innerHeight;

const theme = {
  breakpoint,
  color,
  effects,
  fontFamily,
  fontSize,
  spacing,
  visibleHeight: `${visibleHeight}px`,
};

export default theme;
