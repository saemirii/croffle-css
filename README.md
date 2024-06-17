# croffle-css
a lightweight CSS framework to design aesthetically-pleasing websites

![header](https://github.com/saemirii/croffle-css/assets/88029789/2c612018-d342-4300-9445-2ab475b7ff96)

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

#### `applyPastelColor("class", "hex color")`

Converts any color to a pastel shade.

```js
document.addEventListener('DOMContentLoaded', () => {
    applyPastelColor('.card', '#4287f5'); // Apply pastel color to elements with class "card"
});
```

#### `applyBlobAnimation("class")`

Applies a blob animation to a button class.

```js
document.addEventListener('DOMContentLoaded', () => {
    applyBlobAnimation('.card'); // Apply blob animation to buttons with class "card"
});
```

These are just a few examples of the utility functions provided by `croffle-css`. For a complete list of available functions and their usage, please refer to the official documentation.

### Contributing

If you would like to contribute to `croffle-css`, please follow the guidelines outlined in the [CONTRIBUTING.md](https://github.com/saemirii/croffle-css/blob/main/CONTRIBUTING.md) file.

### License

`croffle-css` is released under the [MIT License](https://github.com/saemirii/croffle-css/blob/main/LICENSE).

