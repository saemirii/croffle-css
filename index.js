const fs = require('fs');
const path = require('path');

const cssFilePath = path.join(__dirname, 'cupcake.css');

const cssContent = fs.readFileSync(cssFilePath, 'utf8');

module.exports = cssContent;
