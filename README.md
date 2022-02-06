# Sim's Bundled React Web App Boilerplate

A hopefully minimal and uncomplicated base to get started building a bundled React web app!

## Why should I use this template?

This template is designed for:

- **Myself, first-and-foremost.**
    - Ultimately, I'm making this for myself as my preferred base to start a new front-end web project.
    - This template will inevitably conform to some non-standard tastes in tooling and coding style. For example, I prefer 4-space indentation rather than 2-space. If something gets too indented for 4-space indentation, then it probably needs to be refactored.
- **Minimalism.**
    - I include as few dependencies as possible and with a hopefully unconvoluted configuration rather than bloat it up like [create-react-app](https://github.com/facebook/create-react-app) (especially when you eject from CRA).
    - For real projects, I expect to include and configure only as needed rather than bringing in too many black boxes that I don't understand right from the beginning.
- **Including all the common elements of a practical _multi-page_ web application within reason.**
    - Minification, HTML templating, basic asset management, and automated testing are all key inclusions.
- **Safety.**
    - I'm mainly talking about type safety, but this can also include things like automated testing to keep the app safe from breaking changes.
    - This is very important for applications with a fair bit of complexity. 
- **Long-term maintainability.**
    - I will only choose dependencies that are mature and I believe have the best chance of remaining relevant for at least 10 years. (Beyond 10 years is fair game, and honestly not really thinking about.)
    - Cool new tooling that improve on the process will always come and go. I don't want to constantly chase them for serious projects.
    - Only when something has proven itself as a worthy replacement with widespread adoption, a comparably strong support, and major benefits over my current choices will I consider jumping to a new stack.

The tooling I chose to include in this template are:

- **Yarn Berry** (for node package management)
- **Webpack** (as the module bundler to ultimately compile our web application)
- **React** (as the main web UI library)
- **Babel** (for Javascript transpilation)
- **TypeScript** (as the preferred scripting language due to its type safety and ecosystem maturity)
- **Raw CSS** (for styling since I'm not entirely convinced I need a styling preprocessor yet)
- **Jest** (for automated testing)

This template does NOT include:

- Any backend application code. It is front-end only.
- JSX/TSX
    - I don't like it, so I didn't explicitly include it in this configuration, though I might add it in later if I start liking it.
    - If you want to use JSX/TSX, it shouldn't be hard to add support for it.
- Any abstractions for managing complex trees of HTML files.
    - I debated whether or not I should write helpers for this, but I opted out since it will significantly obscure the configuration files for a use-case that really isn't too unlikely.
    - This template will still be useful for making *somewhat complex* trees of HTML files of maybe up to maybe 20 pages, mostly limited by your willingness to maintain the consistency of the configuration entries by hand.
    - If you reeeeealy need to maintain big document trees, only then should you build abstractions for it.

Other considerations you should make when deciding whether to adopt this template:

- Yarn Berry may not be properly compatible with the libraries that you want to use.
    - For example, as of 2022-02-06, Flow and React Native don't work with Yarn Berry due to incompatibility with the Plug'n'Play feature.
    - By all means migrate this template to Yarn 1 or NPM, but you're on your own for that one.
- I configured this repo to opt into Yarn Berry's [zero-installs](https://yarnpkg.com/features/zero-installs) philosophy. I like it this way, but you might not.
    - I really like including dependencies, particularly for long-term maintainability. In theory, as long as you have a compatible version of the Node runtime, you will always be able to compile your web application!
    - If you want to opt out, it should be fairly easy. All you need to do is modify the `.gitignore` file and remove the relevant files from the repo by hand.
- If you're making a very simple web application, I suggest considering opting out of using toolchains.
    - You would miss out on the niceties of using a bundler/compiler, but in the process, you make everything so much simpler.

## How do I run this?

First, you need to install node and npm. On Debian, this can be done with:
```
sudo apt-get install nodejs npm
```

Afterwards, you'll need to clone and enter the repo:
```
git clone https://github.com/simshadows/react-tsx-ghpages-toolchain-test.git
cd react-tsx-ghpages-toolchain-test
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

Or, you can use webpack's development server:
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

- Moving all auto-generated files to `_generated` without symlinking or creating additional hardlinks.
    - I want to avoid dependence on filesystem features.
    - Probably the only auto-generated file/directory I don't want to move into `_generated` is `.yarn`.
- Moving all tooling configuration (such as `webpack.config.js`) into `internals`.
- Mobile icons.
    - I'm still deciding on whether I want to use [`favicons-webpack-plugin`](https://github.com/jantimon/favicons-webpack-plugin).
- I have no idea why `internals/global.d.ts` works even though I haven't explicitly referenced it anywhere.
    - If I add `"include": ["internals/global.d.ts"],` to `tsconfig.json`, type checking no longer works. I have no idea why.
    - If I remove `internals/global.d.ts`, images can no longer be imported for some reason.

## License

All original source code is licensed under the [*The Unlicense (Unlicense)*](https://unlicense.org/).

All original images are licensed under the [*CC0 1.0 Universal (CC0 1.0)*](https://creativecommons.org/publicdomain/zero/1.0/).

