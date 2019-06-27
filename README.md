# Market App

This application fetches a list of available items and its attributes. The user will be able to select any available items and add it to a shopping cart. There, the user will be able to edit those items (delete, change quantity), see the total price, price of shipping, and tax. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Make sure Node.js and npm is installed.

```
node -v
```
```
npm -v
```
If you see a version number, please skip to the next section.

If you don't see a version number, go here to download Node.js and npm:
https://www.npmjs.com/get-npm.

After downloading and installing Node.js and npm, run the above commands again and make sure you get a version number.

### Installation

You can do 2 things to get you up and running with Market App, you can either fork everything in this repo and run:

```
npm install
```
or

you can install Next.js with Jest unit testing and copy/paste over only the essential folders/files from this repo.

```
npm i npx
```
```
npx create-next-app --example with-jest with-jest-app
```
1. Copy/paste 'pages' and 'src' folders into the parent project folder.
2. Delete all contents in your local 'package.json' file and replace it with all contents in 'package.json' from this repo.
3. run this command:

```
npm install
```

## Running the application locally

```
npm run dev 
```
application will be ready on http://localhost:3000/

## Deployment

You can deploy this static application onto Netlify.
Directions here:
https://dev.to/kozakrisz/deploy-nextjs-project-to-netlify-4bd5

## Built With

* [Next.js](https://nextjs.org/) - The web framework used
* [Redux](https://redux.js.org/) - React.js pattern


## Versioning

[SemVer](http://semver.org/)
For the versions available, see the [tags on this repository](https://github.com/jabattack1/misfits/releases). 

## Authors

* **Peter Hahn** - [jabattack1](https://github.com/jabattack1)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* The good people at Russell Tobbin

