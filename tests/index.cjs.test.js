const easton = require('../CJS/index.cjs');
const { styles } = require('../CJS/styles.cjs');

describe('easton function tests (CJS)', () => {
  const testStyleApplication = (color, style, text) => {
    const styledText = easton(color, style)(text);
    expect(styledText).toContain('\u001b[');
    expect(styledText).toContain(text);
    expect(styledText).toContain('\u001b[0m');
  };

  test('HEX color with styles', () => {
    Object.keys(styles).forEach(style => {
      if (style !== 'reset') {
        testStyleApplication('#FF00FF', style, `${style} test`);
      }
    });
  });

  test('RGB color with styles', () => {
    Object.keys(styles).forEach(style => {
      if (style !== 'reset') {
        testStyleApplication([255, 0, 255], style, `${style} test`);
      }
    });
  });

  test('Styles only', () => {
    Object.keys(styles).forEach(style => {
      if (style !== 'reset') {
        testStyleApplication(null, style, `${style} test`);
      }
    });
  });

  test('Reset style', () => {
    const styledText = easton('#FF00FF', 'bold', 'italic', 'reset')('Reset test');
    expect(styledText).toContain('\u001b[');
    expect(styledText).toContain('Reset test');
    expect(styledText).toContain('\u001b[0m');
  });

  test('Combination of styles', () => {
    const styledText1 = easton('#00FF00', 'bold', 'italic')('Bold + Italic');
    expect(styledText1).toContain('\u001b[');
    expect(styledText1).toContain('Bold + Italic');
    expect(styledText1).toContain('\u001b[0m');

    const styledText2 = easton(0, 255, 0, 'underline', 'blink')('Underline + Blink');
    expect(styledText2).toContain('\u001b[');
    expect(styledText2).toContain('Underline + Blink');
    expect(styledText2).toContain('\u001b[0m');

    const styledText3 = easton('bold', 'italic', 'underline')('Bold + Italic + Underline (No Color)');
    expect(styledText3).toContain('\u001b[');
    expect(styledText3).toContain('Bold + Italic + Underline (No Color)');
    expect(styledText3).toContain('\u001b[0m');
  });
});