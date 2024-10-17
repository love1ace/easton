export const styles = {
  bold: '1',
  italic: '3',
  underline: '4',
  strikethrough: '9',
  blink: '5',
  inverse: '7',
  hidden: '8',
  reset: '0',
};

export function applyStyles(...options) {
  return options
    .filter((option) => styles[option])
    .map((option) => styles[option]);
}