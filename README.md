# vue-content-loader

[![NPM version](https://img.shields.io/npm/v/@rem/vue-content-loader.svg?style=flat)](https://npmjs.com/package/@rem/vue-content-loader) [![NPM downloads](https://img.shields.io/npm/dm/@rem/vue-content-loader.svg?style=flat)](https://npmjs.com/package/@rem/vue-content-loader) [![CircleCI](https://circleci.com/gh/egoist/vue-content-loader/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/vue-content-loader/tree/master)

SVG component to create placeholder loading, like Facebook cards loading.

## Install

```bash
yarn add @rem/vue-content-loader
```

__NOTE: You're installing `@rem/vue-content-loader` instead of `vue-content-loader`.__

CDN: [UNPKG](https://unpkg.com/@rem/vue-content-loader/) | [jsDelivr](https://cdn.jsdelivr.net/npm/@rem/vue-content-loader/) (available as `window.contentLoaders`)

## Usage

```vue
<template>
  <content-loader></content-loader>
</template>

<script>
import { ContentLoader } from '@rem/vue-content-loader'

export default {
  components: {
    ContentLoader
  }
}
</script>
```

🔥 [Check out the __storybook__ to see how it rocks!](https://vue-content-loader.egoist.moe)

### Built-in loaders

```js
import {
  ContentLoader,
  FacebookLoader,
  CodeLoader,
  BulletListLoader,
  InstagramLoader,
  ListLoader
} from '@rem/vue-content-loader'
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
|uniquekey|string|`randomId()`|Unique ID, you need to change it for SSR|
|animate|boolean|`true`||


## License

MIT &copy; [EGOIST](https://github.com/egoist)
