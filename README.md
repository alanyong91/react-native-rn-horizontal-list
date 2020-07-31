# react-native-rn-horizontal-list

## React Native Horizontal List

A simple react native horizontal list

## Installation

```sh
npm install react-native-rn-horizontal-list
```

or

```sh
yarn add react-native-rn-horizontal-list
```

## Usage

```js
import React, { useState, useEffect } from 'react';
import RNHorizontalList from "react-native-rn-horizontal-list";
  
export default () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  return (
    <RNHorizontalList
      loading={loading}
      title="New Releases"
      data={data}
    />
  );
}
```

## Props

```js
loading: boolean;
title: string | null;
data: any[];
```

## View Sample

```js
import {HorizontalListExample} from "react-native-rn-horizontal-list";
  
export default () => {
  return (
    <HorizontalListExample />
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
