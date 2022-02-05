# react-tsx-ghpages-toolchain-test

In this repo, I incrementally introduce tooling to a simple static React project!

The goal is to use TSX, compile to minified (or better) code, introduce a testing framework, and have a sustainable workflow for hosting the application on GitHub Pages.

I'm currently still trying to figure it out though.

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

## Not Yet Implemented

In trying to figure out the nicest and most well-supported ways of doing things, I've run into a couple features that I'm not sure how to include in this boilerplate. These are:

- Moving all auto-generated files to `_generated` without symlinking or creating additional hardlinks.
    - I want to avoid dependence on filesystem features.
    - Probably the only auto-generated file/directory I don't want to move into `_generated` is `.yarn`.
- Moving all tooling configuration (such as `webpack.config.js`) into `internals`.
- Mobile icons.
    - I'm still deciding on whether I want to use [`favicons-webpack-plugin`](https://github.com/jantimon/favicons-webpack-plugin).

## License

All original source code is licensed under the [*The Unlicense (Unlicense)*](https://unlicense.org/).

All original images are licensed under the [*CC0 1.0 Universal (CC0 1.0)*](https://creativecommons.org/publicdomain/zero/1.0/).

