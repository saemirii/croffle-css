# croffle-css
a lightweight CSS framework to design aesthetically-pleasing websites

![header](https://github.com/saemirii/croffle-css/assets/88029789/2c612018-d342-4300-9445-2ab475b7ff96)

<div align="center">

[![npm version](https://img.shields.io/npm/v/croffle-css.svg?style=flat-square)](https://www.npmjs.org/package/croffle-css)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=croffle-css&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=croffle-css)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/croffle-css?style=flat-square)](https://bundlephobia.com/package/croffle-css@latest)
[![npm downloads](https://img.shields.io/npm/dm/croffle-css.svg?style=flat-square)](https://npm-stat.com/charts.html?package=croffle-css)
</div>
<div align = "center">
<a href="https://vercel.com/?utm_source=discordjs&utm_campaign=oss"><img src="https://raw.githubusercontent.com/discordjs/discord.js/main/.github/powered-by-vercel.svg" alt="Vercel" /></a>
</div>


</div>

`croffle-css` is a lightweight CSS framework designed to add a touch of aesthetic and cuteness to your web projects. It provides a collection of utility functions in the `utils` module that can be used to enhance the design and layout of your website.

## official documentation
To learn how to utilize this npm package, kindly view its official documentation here: **https://saemirii.gitbook.io/croffle-css**

## community
Want to partake in discussions regarding croffle-css? Feel free to join the discord server: https://discord.gg/z4MGaEBCda

### Installation

You can install `croffle-css` via npm by running the following command:

```bash
npm install croffle-css
```

Alternatively, you can include it directly in your HTML by adding the following line:

```html
<link rel="stylesheet" href="path/to/croffle.min.css">
```

Replace `"path/to/croffle.min.css"` with the actual path to `croffle.min.css` in your project or repository.

### Usage

Once installed, you can start using `croffle-css` in your HTML files. Here are some of the utility functions available in the `utils` module:

## crayon utils
#### `applyPastelColor("class", "hex color")`

Converts any color to a pastel shade.

```js
document.addEventListener('DOMContentLoaded', () => {
    applyPastelColor('.card', '#4287f5'); // Apply pastel color to elements with class "card"
});
```

## button animation classes
#### `btn-lift, btn-shadow-lift, btn-slide-fill`

Applies an aesthetic and simple button animation to a button class.

```html
<button class="btn-2">Click me!</button>
<div class="btn-shadow"></div>
```

These are just a few examples of the utility functions provided by `croffle-css`. For a complete list of available functions and their usage, please refer to the official documentation.

### Contributing

If you would like to contribute to `croffle-css`, please follow the guidelines outlined in the [CONTRIBUTING.md](https://github.com/saemirii/croffle-css/blob/main/CONTRIBUTING.md) file.

### License

`croffle-css` is released under the [MIT License](https://github.com/saemirii/croffle-css/blob/main/LICENSE).

