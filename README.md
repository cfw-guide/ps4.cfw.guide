## ps4.cfw.guide
A complete PS4 modding guide, from stock to jailbroken.

https://ps4.emiyl.guide

## Running the site locally

This requires the following installed to your system:
- [Node.js v12+](https://nodejs.org/)
- [Yarn v1 classic](https://classic.yarnpkg.com/en/) (npm install --global yarn)

To test the website locally, simply run the following commands:
```
yarn install
```
to install all packages required by the website (VuePress v2 and plugins), then
```
yarn docs:dev
```
to build the Markdown files into HTML and start a testing webserver on http://127.0.0.1:8080.
