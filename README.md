# Simplr Template App

This project contains the UI for the 'Simplr Sign Up'. The form is built upon basic React with preference to use react hooks to manage state. Use of hooks avoids additional template code with React Classes and containers methodology. 

The UI is mostly up to spec with the given figma designs and includes
- basic screen resizing: Minimalist form centering to allow use on desktop and smaller screens.
- form input and form state management
- basic input validation (simple value checks to show UI error strings)
- custom vanilla css using css modules and without reliance on css frameworks (i.e. sass) or libraries (i.e. bootstrap)
- custom Select component from scratch to demonstrate customizability to design. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Quick Start

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Testing 

After running the app. The form can interacted with by clicking on form fields and typing or selecting certain input. The Sign Up Button will console.log the current form state. 

### Future Iterations

#### Validation
Adding more robust validation for the form. Hopefully using a vetted library (i.e. validation.js for passwords, emails, etc). 
- Example Library: https://www.npmjs.com/package/validator (4 million weekly downloads -- don't reinvent the wheel)
- Simplier solutions could be use common regex patterns 
  - https://emailregex.com/
  - https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a  
- Validating on Submit: validating all fields and scrolling to field that requires correction with better error validation (i.e. password or email special chars errors)

#### Refactoring
- Refactoring Inputs Components to use a HOC which will source form state, placeholder strings, and error strings from const enum objects. Easier for maintaince and possible flexibility for language conversion (i.e. German, French etc.). Possilble to generalize. 
- Separate components into separate files.

#### Testing 
Testing render and form states, error states, and validation.

#### CDN 
Iconography and svgs if not done in pure css. 

#### Custom Form and Component Testing 

- Style. The checkbox isn't style. 
- Font. Local Imports or CDN.
- Microinteractions. Better hover animations. Increase usability affordance in Custom Select on hover or animate the arrow transition.

## Other Create React App Commands. 

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
