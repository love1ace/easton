import easton from '../ESM/index.js';

console.log('\n=== Easton Style and Color Demo ===\n');

// Basic styles
console.log(easton('bold')('Bold text'));
console.log(easton('italic')('Italic text'));
console.log(easton('underline')('Underlined text'));
console.log(easton('strikethrough')('Strikethrough'));
console.log(easton('blink')('Blink (works only in some terminals)'));
console.log(easton('inverse')('Reverses the foreground and background colors'));
console.log(easton('hidden')('Hidden text (select this text to see it)'));

console.log('\n=== HEX Colors ===');
console.log(easton('#d93611')('#d93611') + ' ' + easton('#d97511')('#d97511') + ' ' + easton('#d9d611')('#d9d611'));
console.log(easton('#a0d911')('#a0d911') + ' ' + easton('#18d911')('#18d911') + ' ' + easton('#11d9c2')('#11d9c2'));
console.log(easton('#119dd9')('#119dd9') + ' ' + easton('#1157d9')('#1157d9') + ' ' + easton('#6614f6')('#6614f6'));

console.log('\n=== RGB Colors ===');
console.log(easton(217, 54, 17)('[217,54,17]') + ' ' + easton(217, 214, 9)('[217,214,9]') + ' ' + easton(24, 217, 17)('[24,217,17]'));
console.log(easton(9, 157, 217)('[9,157,217]') + ' ' + easton(122, 9, 246)('[122,9,246]') + ' ' + easton(197, 9, 217)('[197,9,217]'));
console.log();
const rainbow = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#8B00FF'];
const text = 'Easton supports all colors and styles!';
text.split('').forEach((char, i) => {
  process.stdout.write(easton(rainbow[i % rainbow.length])(char));
});
console.log('\n');
console.log('\nMake your console vibrant with Easton!');