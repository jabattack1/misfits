**Market App**

1. npx create-next-app --example with-jest with-jest-app
2. npm install
3. npm install --save @zeit/next-css
4. create new file in parent directory called 'next.config.js'
5. copy, paste, then save:
	const withCSS = require('@zeit/next-css')
	module.exports = withCSS()
6. npm run dev (ready on http://localhost:3000/)

# 
