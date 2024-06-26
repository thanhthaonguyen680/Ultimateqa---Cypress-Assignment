# Thao Nguyen Cypress setup to build Automation project

## 1. Download and Install  Node.js & NPM: 
- https://nodejs.org/en/download/
- https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
# After install required software => Follow there step to build project
## 2. Create folder code
## 3. Open folder code in Visual Studio Code
## 4. Open Terminal
## 5. Create new cypress project:
```javascript
npm init
```
```javascript
{
  "name": "ultimateqaautomation",
  "version": "1.0.0",
  "description": "CypressAutomationE2E",
  "main": "index.js",
  "scripts": {
    "test": "cypress open"
  },
  "keywords": [
    "cypress",
    "cucumber"
  ],
  "author": "Thao Nguyen",
}
```
## 6. Install cypress:
```javascript
npm install cypress --save-dev
```
# Update cypress
```javascript
npm install --save-dev cypress@12.17.2
```
## 7: Start cypress project:
```javascript
npm run test or npx cypress open
```
## 8. Typescript install setup:
```javascript
npm install --save-dev typescript
```
```javascript
create file tsconfig.json:
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node"]
  },
  "include": ["**/*.ts"]
}
```
- https://docs.cypress.io/guides/tooling/typescript-support#Install-TypeScript

## 9. Xpath setup:
- https://github.com/cypress-io/cypress/tree/develop/npm/xpath
```javascript
npm install -D @cypress/xpath --save-dev
```
Add the code into e2e.js:
```javascript
require('@cypress/xpath');
```
Importance note: add the code  into tsconfig.json:
```javascript
"types": ["cypress", "node", "@cypress/xpath"]
```
## 10. Page Object model setup:
Create file Selector as pages
```javascript
export const AutomationPage = {
  //elements input here:
  title: "",
  ....
}

```
## 11. How to use Fixture file connection:

```
ProjectRoot
    |__cypress
    |        |___ fixtures
    |        |___ e2e
    |                |___ pages: PageObject Folder
    |                |___ tests: Test cases folder
    |        |___ reports
    |        |___ screenshots
    |        |___ videos
    |        |___ support
    |__package.json
    |__cypress.config.js
    |__tsconfig.json
```
## 12. Install report: 
- https://www.npmjs.com/package/cypress-mochawesome-reporter
```javascript
npm install mochawesome --save-dev
```
```javascript
npm i --save-dev cypress-mochawesome-reporter
```
```javascript
npm install mochawesome-merge --save-dev
```
Options commands:
- https://docs.cypress.io/guides/guides/command-line#cypress-run

```javascript
npm install @bahmutov/cypress-esbuild-preprocessor --save-dev
```
## 13. Run test report: 
npx cypress run

```