const hexToAnsi = (hex) => {
  const rgb = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `\u001b[38;2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
};

module.exports = { hexToAnsi };
