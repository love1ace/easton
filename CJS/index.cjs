const { hexToAnsi } = require('hex-to-ansi');
const { rgbToAnsi } = require('rgb-to-ansi');
const { applyStyles } = require('./styles.cjs');

function easton(...args) {
  let sgrParams = [];
  let finalStyles = [];

  if (args.length > 0) {
    const [firstArg, ...restArgs] = args;

    if (typeof firstArg === 'string' && firstArg.startsWith('#')) {
      const colorCode = hexToAnsi(firstArg);
      const colorParams = colorCode.match(/\u001b\[([0-9;]+)m/)[1];
      sgrParams.push(...colorParams.split(';'));
      finalStyles = restArgs;
    } else if (
      typeof firstArg === 'number' &&
      typeof restArgs[0] === 'number' &&
      typeof restArgs[1] === 'number'
    ) {
      const colorCode = rgbToAnsi(firstArg, restArgs[0], restArgs[1]);
      const colorParams = colorCode.match(/\u001b\[([0-9;]+)m/)[1];
      sgrParams.push(...colorParams.split(';'));
      finalStyles = restArgs.slice(2);
    } else {
      finalStyles = args;
    }
  }

  const styleCodes = applyStyles(...finalStyles);
  sgrParams = styleCodes.concat(sgrParams);

  return (text) => {
    const sgrSequence = `\u001b[${sgrParams.join(';')}m`;
    return `${sgrSequence}${text}\u001b[0m`;
  };
}

module.exports = easton;