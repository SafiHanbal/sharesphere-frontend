import { LineThin, LineMedium, LineBold } from './line.styles';

export const LINE_TYPES = {
  thin: 'thin',
  medium: 'medium',
  bold: 'bold',
};

const getLine = (lineType) =>
  ({
    [LINE_TYPES.thin]: LineThin,
    [LINE_TYPES.medium]: LineMedium,
    [LINE_TYPES.bold]: LineBold,
  }[lineType]);

const Line = ({ lineType = LINE_TYPES.thin }) => {
  const CustomLine = getLine(lineType);
  return <CustomLine />;
};

export default Line;
