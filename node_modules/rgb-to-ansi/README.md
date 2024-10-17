# rgb-to-ansi

**rgb-to-ansi** is a rgb to ansi converter.

![npm](https://img.shields.io/npm/v/rgb-to-ansi)
![license](https://img.shields.io/npm/l/rgb-to-ansi)

## Quick Start

Get **rgb-to-ansi** up and running quickly!

1. **Run**:
    ```bash
    npm install rgb-to-ansi
    ```
2. **Use**:
   ESM:
   ```js
   import { rgbToAnsi } from 'rgb-to-ansi';
   console.log(`${rgbToAnsi(255, 87, 51)}Test Message\u001b[0m`);
   ```
   CommonJS:
   ```js
   const { rgbToAnsi } = require('rgb-to-ansi');
   console.log(`${rgbToAnsi(255, 87, 51)}Test Message\u001b[0m`);
   ```
    

## Contributing

We welcome contributions to **rgb-to-ansi**! Whether it's reporting a bug, suggesting an enhancement, or submitting a pull request, your input is valued.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions, suggestions, or feedback, please contact [love1ace](mailto:lovelacedud@gmail.com).
