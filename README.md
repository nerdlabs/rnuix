# React Native UI Explorer

The React Native UI Explorer, rnuix in short, is a tool to help developing and showcasing the UI components for your app. It's meant to be included in your project as a dependency, but you can also use it as a stand-alone app.

## Philosophy
* No native dependencies
* Minimal amount of JS dependencies
* No code duplication - directly use the components developed inside rnuix in your app

## Installation
* `yarn add rnuix`
* Add a `collect` script to your `package.json`:
```json
{
  "scripts": {
    "collect": "rnuix collect src/ui-components"
  }
}
```
* Add `rnuix` to your main entry file:
```jsx
import { App } from 'rnuix';

// components will be collected to a top-level components.js
import components from '../components';

// render the UI explorer. You might want to add a toggle in your app 
// to switch between rendering the app or the UI explorer.
// You may also provide an `onExit` prop on `App` to switch back
// to the app from inside the UI explorer.
export default function MyApp() {
  return (
    <App screenProps={{ components }} />
  )
}
```
* Develop your components in `src/ui-components`
* Add a `demo.js` for each component:
```jsx
import React from 'react';
import MyComponent from './';

export default {
  displayName: 'MyComponent'
  description: 'Renders something beautiful.',
  demos: [
    {
      title: 'Default',
      render: () => (
        <MyComponent />
      )
    },
    {
      title: 'Some variation',
      render: () => (
        <MyComponent something="different" />
      )
    }
  ]
};
```
* Regenerate `components.js` by running `npm run collect`
