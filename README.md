General Provisions.

Development subject.

Front-end application implemented in React, Redux, Formik (for creating forms), React Date Picker (for using dates). 
The app allows the user to add an event to the store
using the following fields:
* First Name - validation up to 10 characters is used.
* Last name - validation up to 10 characters is used.
* Email - validation for mail is used (xxx@xxx.xx)
* Event date. 
  From all 4 fields, data (Formik) in the Contact component is read and written to the state using (dispatch)


### `yarn install`

yarn install is used to install all dependencies for a project.\
Install all the dependencies listed within package.json in the local node_modules folder.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
