# vue-content-loader

[![NPM version](https://img.shields.io/npm/v/vue-content-loader.svg?style=flat)](https://npmjs.com/package/vue-content-loader) [![NPM downloads](https://img.shields.io/npm/dm/vue-content-loader.svg?style=flat)](https://npmjs.com/package/vue-content-loader) [![CircleCI](https://circleci.com/gh/egoist/vue-content-loader/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/vue-content-loader/tree/master)

SVG component to create placeholder loading, like Facebook cards loading.

![preview](https://user-images.githubusercontent.com/4838076/34308760-ec55df82-e735-11e7-843b-2e311fa7b7d0.gif)

## Features

This is a Vue port for [react-content-loader](https://github.com/danilowoz/react-content-loader).

- Completely customizable: you can change the colors, speed and sizes.
- Create your own loading: use the [online tool](https://danilowoz.github.io/create-react-content-loader/) to create your custom loader easily.
- You can use it right now: there are a lot of presets already.
- Performance:
  - Tree-shakable and highly optimized bundle.
  - Pure SVG, so it's works without any javascript, canvas, etc.
  - Pure functional components.

## Install

```bash
yarn add vue-content-loader
```

CDN: [UNPKG](https://unpkg.com/vue-content-loader/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-content-loader/) (available as `window.contentLoaders`)

## Usage

👀👉 Demos: [Storybook](https://vue-content-loader.egoist.moe) | [with Nuxt.js](https://glitch.com/edit/#!/vue-content-loader)

```vue
<template>
  <content-loader></content-loader>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  components: {
    ContentLoader
  }
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
  ListLoader
} from 'vue-content-loader'
```

`ContentLoader` is a meta loader while other loaders are just higher-order components of it. By default `ContentLoader` only displays a simple rectangle, here's how you can use it to create custom loaders:

```vue
<ContentLoader>
  <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
  <rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
  <rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
  <rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
  <rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
  <rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
</ContentLoader>
```

This is also how [ListLoader](./src/ListLoader.js) is created.

You can also use the [online tool](http://danilowoz.com/create-react-content-loader/) to create shapes for your custom loader, it's made for [react-content-loader](https://github.com/danilowoz/react-content-loader) but the JSX it generates can be used in Vue templates or Vue JSX as well.

## API

### Props


|Prop|Type|Default|Description|
|---|---|---|---|
|width|number|`400`||
|height|number|`130`||
|speed|number|`2`||
|preserveAspectRatio|string|`'xMidYMid meet'`||
|primaryColor|string|`'#f9f9f9'`||
|secondaryColor|string|`'#ecebeb'`||
|uniquekey|string|`randomId()`|Unique ID, you need to make it consistent for SSR|
|animate|boolean|`true`||

## Credits

This is basically a Vue port for [react-content-loader](https://github.com/danilowoz/react-content-loader).

[Thanks to @alidcastano for transferring the package name to me.](https://github.com/egoist/vue-content-loader/issues/1) 😘

## License

MIT &copy; [EGOIST](https://github.com/egoist)
