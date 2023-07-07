<div align="center" style="margin: 10px 0">
  <div>
    <h1 style="font-size: 2em; margin-bottom: 0px">Jupe.js</h1>
    <small>(French word for "skirt", pronounced <code>[/ʒyp/]</code>)</small>
  </div>
  <br>
  <img width="180" src="res/icon.png" alt="Vite logo">
</div>
<hr>

❤️ A lightweight framework to wrap functions with code

💚 Clean code for reoccurring code-wraps

💙 Extensible plugin system with full type-safety

🚀 Ready to use and provided with types

<hr>

<br>

## When and Why?

Need to scrape an API or move files from A to B? Don't clutter your production code with secondary tasks! Instead of repeatedly calling the same stack of functions before and after the execution of the main tasks, wrap them with Jupe and let Jupe do the repeated work for you. All with an API, that feels like butter to use.

<br>

## How to use Jupe?

Jupe is really easy to use and once installed behaves just as you would think. No unnecessary hoops to jump through.

### 📥 Installation

➔ **npm**

```bash
npm install jupe
```

➔ **yarn**

```bash
yarn add jupe
```

<br>

### 🌱 Initialization

First you need to import the Jupe constructor from the package:

```ts
import Jupe from "jupe";
```

Then you can initialize Jupe by providing the construction function with a plugin array. In this example the array `plugins` represents an array of Jupe-Plugins with the Jupe-Type `Plugin`.

```ts
const { $ } = Jupe([...plugins]);
```

The return value of the construction function is an object with one item at the key `$`. You can directly destruct the object (as shown in the example) for easier usage.

`$` is an async function that can now be used to wrap any function you want to apply the plugins to.

<br>

### 🎁 Wrapping

Lets imagine a function `someTask()`:

```ts
async function someTask(someArgument: string) {
  // Do something
}
```

To wrap the function with the plugins, which were previously specified in the plugin array, you have to use the wrapper function `$`.

```ts
const result = await $(someTask, argsForPlugins)(someArgument);
```

The argument `argsForPlugins` in the example is of the datatype object and is dependent on the arguments required by the plugins. Therefore there can be cases where it is not necessary to provide the argument. Intelligent code completion is your best friend here as Jupe is completely type-safe.

<br>

### 📦 Plugins

You can declare plugins as shown in the example below.

📁`examplePlugin.ts`

```ts
import { Plugin } from "jupe";

type PluginParams = {
  exampleParameter: string;
};

const main: Plugin<PluginParams> = async (task, params) => {
  // Do something before execution
  const result = await task();
  // Do something after execution
  return result;
};

export default main;
```

And then use them as shown below.

📁`exampleUsage.ts`

```ts
import Jupe from "jupe";
import examplePlugin from "./examplePlugin";
const { $ } = Jupe([examplePlugin]);

// ...
```

<br>

## ESM

Jupe is a pure ESM package. It can not be `required()`'d from CommonJS. If you need help migrating to ESM or implementing Jupe because of ESM, refer to [this post](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

<br>

## About the name

When using Jupe, you are basically dressing functions: You are throwing over dress after dress, without changing the functions character at the core. Thats why it is called `Jupe`, or "skirt" in english.

<br>

---

### Licenses

➔ <a href="https://www.flaticon.com/free-icons/skirt" title="skirt icons">Skirt icon created by Freepik - Flaticon</a>

---

🚀 https://github.com/choozn

© Copyright 2023 - [@choozn](https://choozn.dev)
