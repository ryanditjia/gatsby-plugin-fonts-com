# gatsby-plugin-fonts-com

Heads up: this plugin currently **does not import fonts** to your project. It only adds scripts to track webfont usage (required according to your subscription).

Add [Fonts.com](https://www.fonts.com/) webfont usage tracking script to your Gatsby site.

## Install

`npm install --save gatsby-plugin-fonts-com`

## How to use

> TODO: clearer documentation

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-fonts-com',
      options: {
        projectId: 'YOUR_WEBFONT_PROJECT_ID',
        // Optional. Disables tracking during gatsby develop. Defaults to true.
        enableDuringDevelop: false,
      },
    }
    'your',
    'other',
    'plugins',
  ],
}
```

Restart your Gatsby server for the plugin to take effect.

If you have improvements that you’d like to see, or encounter any bugs, feel free to [create an issue](https://github.com/ryanditjia/gatsby-plugin-fonts-com/issues)!
