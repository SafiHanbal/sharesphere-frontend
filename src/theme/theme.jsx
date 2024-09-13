import breakpoint from './breakpoint';
import color from './color';
import effect from './effect';
import fontFamily from './font-family';
import fontSize from './font-size';
import spacing from './spacing';

const visibleHeight = window.innerHeight;
const visibleWidth = window.innerWidth;

const theme = {
  breakpoint,
  color,
  effect,
  fontFamily,
  fontSize,
  spacing,
  visibleHeight: `${visibleHeight}px`,
  visibleWidth: `${visibleWidth}px`,
};

export default theme;
