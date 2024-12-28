# Sim's Bundled React Web App Boilerplate

A hopefully minimal and uncomplicated base to get started building a bundled React web app!

## What's in it?

- **Yarn Berry** (for node package management)
- **Vite** (as the module bundler)
- **React** (as the web UI library)
- **TypeScript** (as the preferred scripting language due to its type safety and ecosystem maturity)
- **Jest** (for automated testing)
- No CSS preprocessor.

## How do I run this?

First, you need to install node and npm. On Debian, this can be done with:
```
sudo apt-get install nodejs npm
```

Afterwards, you'll need to clone and enter the repo:
```
git clone https://github.com/simshadows/bundled-react-web-app-boilerplate.git
cd bundled-react-web-app-boilerplate
```

Optionally, set up npm with a globals directory (and reopen your terminal session):
```
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
```

Now, install yarn globally (and optionally, check its version):
```
npm install -g yarn
yarn --version
```

Now you're good to go! Build and serve the app using:
```
yarn build
yarn serve
```

Or, you can use the development server:
```
yarn start
```

## Auto-generated Files

Please avoid modifying the following files by hand:

- Anything in `.yarn/`
- Anything in `_generated/`
- `.pnp.cjs`
- `.pnp.loader.mjs`
- `yarn.lock`

These files are automatically managed by Yarn and Jest.

## Not Yet Implemented

In trying to figure out the nicest and most well-supported ways of doing things, I've run into a couple features that I'm not sure how to include in this boilerplate. These are:

- Moving all tooling configuration into `internals`.
- Mobile icons.
    - I'm still deciding on whether I want to use [`favicons-webpack-plugin`](https://github.com/jantimon/favicons-webpack-plugin).
- I have no idea why `internals/global.d.ts` works even though I haven't explicitly referenced it anywhere.
    - If I add `"include": ["internals/global.d.ts"],` to `tsconfig.json`, type checking no longer works. I have no idea why.
    - If I remove `internals/global.d.ts`, images can no longer be imported for some reason.

## License

All original source code is licensed under the [*The Unlicense (Unlicense)*](https://unlicense.org/).

All original images are licensed under the [*CC0 1.0 Universal (CC0 1.0)*](https://creativecommons.org/publicdomain/zero/1.0/).

