# vue-content-loader

[![NPM version](https://img.shields.io/npm/v/vue-content-loader.svg?style=flat)](https://npmjs.com/package/vue-content-loader) [![NPM downloads](https://img.shields.io/npm/dm/vue-content-loader.svg?style=flat)](https://npmjs.com/package/vue-content-loader) [![CircleCI](https://circleci.com/gh/egoist/vue-content-loader/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/vue-content-loader/tree/master)

SVG component to create placeholder loading, like Facebook cards loading.

![preview](https://user-images.githubusercontent.com/4838076/34308760-ec55df82-e735-11e7-843b-2e311fa7b7d0.gif)

## Features

This is a Vue port for [react-content-loader](https://github.com/danilowoz/react-content-loader).

- Completely customizable: you can change the colors, speed and sizes.
- Create your own loading: use the [online tool](https://create-content-loader.now.sh/) to create your custom loader easily.
- You can use it right now: there are a lot of presets already.
- Performance:
  - Tree-shakable and highly optimized bundle.
  - Pure SVG, so it's works without any javascript, canvas, etc.
  - Pure functional components.

## Install

⚠️ **The latest version is compatible with Vue 3 only.** For Vue 2 & Nuxt 2, use `vue-content-loader@^0.2` instead.

With npm:

```bash
npm i vue-content-loader
```

Or with yarn:

```bash
yarn add vue-content-loader
```

CDN: [UNPKG](https://unpkg.com/vue-content-loader/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-content-loader/) (available as `window.contentLoaders`)

## Usage

👀👉 Demo: [CodeSandbox](https://codesandbox.io/s/vue-content-loader-igfyf?file=/src/App.vue)

```vue
<template>
  <content-loader></content-loader>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  components: {
    ContentLoader,
  },
}
</script>
```

### Built-in loaders

```js
import {
  ContentLoader,
  FacebookLoader,
  CodeLoader,
  BulletListLoader,
  InstagramLoader,
  ListLoader,
} from 'vue-content-loader'
```

`ContentLoader` is a meta loader while other loaders are just higher-order components of it. By default `ContentLoader` only displays a simple rectangle, here's how you can use it to create custom loaders:

```vue
<ContentLoader viewBox="0 0 250 110">
  <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
  <rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
  <rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
  <rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
  <rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
  <rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
</ContentLoader>
```

This is also how [ListLoader](./src/ListLoader.js) is created.

You can also use the [online tool](http://danilowoz.com/create-vue-content-loader/) to create shapes for your custom loader.

## API

### Props

| Prop                | Type           | Default                                  | Description                                                                                                                                                                                                                                                                                                 |
| ------------------- | -------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| width               | number, string |                                          | SVG width in pixels without unit                                                                                                                                                                                                                                                                            |
| height              | number, string |                                          | SVG height in pixels without unit                                                                                                                                                                                                                                                                           |
| viewBox             | string         | `'0 0 ${width ?? 400} ${height ?? 130}'` | See [SVG viewBox](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox) attribute                                                                                                                                                                                                             |
| preserveAspectRatio | string         | `'xMidYMid meet'`                        | See [SVG preserveAspectRatio](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio) attribute                                                                                                                                                                                     |
| speed               | number         | `2`                                      | Animation speed                                                                                                                                                                                                                                                                                             |
| primaryColor        | string         | `'#f9f9f9'`                              | Background color                                                                                                                                                                                                                                                                                            |
| secondaryColor      | string         | `'#ecebeb'`                              | Highlight color                                                                                                                                                                                                                                                                                             |
| uniqueKey           | string         | `randomId()`                             | Unique ID, you need to make it consistent for SSR                                                                                                                                                                                                                                                           |
| animate             | boolean        | `true`                                   |                                                                                                                                                                                                                                                                                                             |
| baseUrl             | string         | empty string                             | Required if you're using `<base url="/" />` in your `<head />`. Defaults to an empty string. This prop is common used as: `<content-loader :base-url="$route.fullPath" />` which will fill the SVG attribute with the relative path. Related [#14](https://github.com/egoist/vue-content-loader/issues/14). |
| primaryOpacity      | number         | `1`                                      | Background opacity (0 = transparent, 1 = opaque) used to solve an issue in Safari                                                                                                                                                                                                                           |
| secondaryOpacity    | number         | `1`                                      | Background opacity (0 = transparent, 1 = opaque) used to solve an issue in Safari                                                                                                                                                                                                                           |

## Examples

### Responsiveness

To create a responsive loader that will follow its parent container width, use only the `viewBox` attribute to set the ratio:

```vue
<ContentLoader viewBox="0 0 300 200">
  <!-- ... -->
</ContentLoader>
```

To create a loader with fixed dimensions, use `width` and `height` attributes:

```vue
<ContentLoader width="300" height="200">
  <!-- ... -->
</ContentLoader>
```

Note: the exact behavior might be different depending on the CSS you apply to SVG elements.

## Credits

This is basically a Vue port for [react-content-loader](https://github.com/danilowoz/react-content-loader).

[Thanks to @alidcastano for transferring the package name to me.](https://github.com/egoist/vue-content-loader/issues/1) 😘

## License

MIT &copy; [EGOIST](https://github.com/egoist)
