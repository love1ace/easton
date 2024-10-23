const easton = require('../CJS/index.cjs');
const { styles } = require('../CJS/styles.cjs');

// 모든 스타일을 HEX와 RGB로 테스트합니다.
console.log('--- All Styles Test ---');

console.log('-HEX-');
Object.keys(styles).forEach(style => {
  if (style !== 'reset') {
    console.log(easton('#FF00FF', style)(`${style} test`));
  }
});

console.log('\n-RGB-');
Object.keys(styles).forEach(style => {
  if (style !== 'reset') {
    console.log(easton(255, 0, 255, style)(`${style} test`));
  }
});

console.log('\n-Style Only-');
Object.keys(styles).forEach(style => {
  if (style !== 'reset') {
    console.log(easton(style)(`${style} test`));
  }
});

console.log('\n-Reset-');
console.log(easton('#FF00FF', 'bold', 'italic', 'reset')('Reset test'));

console.log('\n-Combinations-');
console.log(easton('#00FF00', 'bold', 'italic')('Bold + Italic'));
console.log(easton(0, 255, 0, 'underline', 'blink')('Underline + Blink'));
console.log(easton('bold', 'italic', 'underline')('Bold + Italic + Underline (No Color)'));