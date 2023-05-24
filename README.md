# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## application create

How to Create your React Application
To create your React application, type npx create-react-app <Your app name> in your terminal, or npx create-react-appreact-crud in this case.

You'll see that the packages are being installed.

Once the packages are done, go into the project folder and type npm start.

You'll see the default React template, like this:

How to Install the Semantic UI Package for React
Let's install the Semantic UI React package in our project. Semantic UI is an UI library made for React that has pre-built UI components like tables, buttons, and many features.

You can install it using one of the commands below, depending on your package manager.

yarn add semantic-ui-react semantic-ui-css
For Yarn Package Manager
npm install semantic-ui-react semantic-ui-css
For NPM package Manager
Also, import the library in your app's main entry file, which is index.js.

import 'semantic-ui-css/semantic.min.css'
Paste this in your index.js file
How to Build your CRUD Application
Now, let's start building our CRUD Application using React.

First, we'll add a heading to our application.

In our app.js file, add a heading like this:

import './App.css';

function App() {
return (

<div>
React Crud Operations
</div>
);
}

export default App;
Adding a heading to our application
Now, let's make sure it's in the center.

Give the parent div a classname of main. And in the App.css file, we will use Flexbox to center the header.

import './App.css';

function App() {
return (

<div className="main">
React Crud Operations
</div>
);
}

export default App;
app.js with className of main in the parent div
.main{
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
}
Our app.css file
Screenshot-2021-07-24-130340
Now our heading in perfectly centered.

So it looks a bit better, we need to make it bolder and add some cool fonts. To do this, we'll use heading tags around our header like this:

import './App.css';

function App() {
return (

<div className="main">
<h2 className="main-header">React Crud Operations</h2>
</div>
);
}

export default App;
Let's import a font from Google Font. Head over to https://fonts.google.com/ to pick one.

Choose any font of your liking, but I will use the Montserrat font-family.

Import the font of your choice in the App.css file, like this:

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
Now, let's change the font of the header.

<div className="main">
      <h2 className="main-header">React Crud Operations</h2>
    </div>
Give the heading tag a className of main-header, just like this.

Then, in your App.css, add the font family:

.main-header{
font-family: 'Montserrat', sans-serif;
}
Screenshot-2021-07-24-132749
Now you will see the changed heading.

How to Create your CRUD Components
Let's create four CRUD Components, which will be Create, Read, Update and Delete.

In our src folder, create a folder called components. And inside this folder, create three files – create, read and update. For delete, we don't need any extra component.

Screenshot-2021-07-24-133242
Now, let's implement the Create operation.

But for that, we need to use Mock API's. These API's will send data to the fake server that we will create, just for learning purposes.

So, head to https://mockapi.io/ and create your account.

Create a project by clicking the plus button.

Screenshot-2021-07-24-133553
Click the plus button to create a new project
Screenshot-2021-07-24-133702
Add your project name, and click the Create button.

Screenshot-2021-07-24-133748
Now, create a new resource by clicking on the NEW RESOURCE button.

Screenshot-2021-07-24-133847
It will ask you for the Resource Name, so enter the name you'd like to use.

Screenshot-2021-07-24-134009
Remove the extra fields like name, avatar, or createdAt, because we won't be needing those. Then, click Create.

Screenshot-2021-07-24-134140
Now, we have created our fake API, which I named fakeData.

Click on fakeData, and you will see the API opening up in a new tab. The database is empty right now.

How to Create a Form for the Create Component
Let's use a form from the Semantic UI library.

Head to Semantic React, and search for Form in the search bar on the left.

Screenshot-2021-07-24-134532
You will see a form like this, so click on Try it at the top right to get the code.

Screenshot-2021-07-24-134654
Copy this code and paste it into your Create.js file like this:

import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const Create = () => (

<Form>
<Form.Field>
<label>First Name</label>
<input placeholder='First Name' />
</Form.Field>
<Form.Field>
<label>Last Name</label>
<input placeholder='Last Name' />
</Form.Field>
<Form.Field>
<Checkbox label='I agree to the Terms and Conditions' />
</Form.Field>
<Button type='submit'>Submit</Button>
</Form>
)

export default Create;
Import the Create Component in your app.js file.

import './App.css';
import Create from './components/create';

function App() {
return (

<div className="main">
<h2 className="main-header">React Crud Operations</h2>
<div>
<Create/>
</div>
</div>
);
}

export default App;
Just like this:

Screenshot-2021-07-24-135249
But there is a problem here – the items are not properly aligned and the text input label colors are black. So, let's change it.

In the create.js file, give Form a className of create-form.

import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const Create = () => (

<Form className="create-form">
<Form.Field>
<label>First Name</label>
<input placeholder='First Name' />
</Form.Field>
<Form.Field>
<label>Last Name</label>
<input placeholder='Last Name' />
</Form.Field>
<Form.Field>
<Checkbox label='I agree to the Terms and Conditions' />
</Form.Field>
<Button type='submit'>Submit</Button>
</Form>
)

export default Create;
app.js
And add the following class in your App.css file:

.create-form label{
color: whitesmoke !important;
font-family: 'Montserrat', sans-serif;
font-size: 12px !important;
}
App.css
This class will target all the form field labels and apply the color whitesmoke. It will also change the font and increase the font-size.

Now, in our main class, add a flex-direction property. This property will set the direction to column, so each element in the main className will be vertically aligned.

.main{
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #212121;
color: whitesmoke;
flex-direction: column;
}
App.css
Screenshot-2021-07-24-140141
You can see that our form looks much better now.

Next, let's get data from the form fields into our console. For that, we will use the useState hook in React.

In our create.js file, import useState from React.

import React, { useState } from 'react';
Then, create states for first name, last name, and the checkbox. We are initializing the states as empty or false.

import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function Create() {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [checkbox, setCheckbox] = useState(false);
return (

<div>
<Form className="create-form">
<Form.Field>
<label>First Name</label>
<input placeholder='First Name' />
</Form.Field>
<Form.Field>
<label>Last Name</label>
<input placeholder='Last Name' />
</Form.Field>
<Form.Field>
<Checkbox label='I agree to the Terms and Conditions' />
</Form.Field>
<Button type='submit'>Submit</Button>
</Form>
</div>
)
}
You can see that this is now acting as a functional component. So, we need to change the component into a functional component. This is because we can only use hooks in functional components.

Now, let's set up the first name, the last name, and the checkbox using the setFirstName, setLastName, and setCheckbox properties, respectively.

<input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>

<input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>

<Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
We are capturing the states of first name, last name, and the checkbox.

Create a function called postData that we'll use to send data to the API. Inside the function, write this code:

const postData = () => {
console.log(firstName);
console.log(lastName);
console.log(checkbox);
}
We are logging the first name, last name, and the checkbox values in the console.

On the Submit button, assign this function using an onClick event so that whenever we press the Submit Button, this function will be called.

<Button onClick={postData} type='submit'>Submit</Button>
Here is the whole code for the create file:

import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function Create() {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [checkbox, setCheckbox] = useState(false);
const postData = () => {
console.log(firstName);
console.log(lastName);
console.log(checkbox);
}
return (

<div>
<Form className="create-form">
<Form.Field>
<label>First Name</label>
<input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
</Form.Field>
<Form.Field>
<label>Last Name</label>
<input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
</Form.Field>
<Form.Field>
<Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
</Form.Field>
<Button onClick={postData} type='submit'>Submit</Button>
</Form>
</div>
)
}
Type some value in the first name and last name, and check the checkbox. Then, click the Submit button. You will see the data popping up in the console like this:

Screenshot-2021-07-24-142717
How to Use Axios to Send API Requests to the Mock APIs
Let's use Axios to send our form data to the mock server.

But first, we need to install it.

Just type npm i axios to install this package.

After the package has been installed, let's start the create operation.

Import Axios at the top of the file.

import axios from 'axios';
Importing Axios
In the postData function, we will use Axios to send the POST request.

const postData = () => {
axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
firstName,
lastName,
checkbox
})
}
Sending Post Request
As you can see, we are using axios.post. And inside axios.post, we have the API endpoint, which we created earlier. Then, we have the form fields wrapped in curly brackets.

When we click Submit, this function will be called and it will post data to the API server.

Screenshot-2021-07-24-174834
Enter your first name, last name, and check the checkbox. Click submit.

Screenshot-2021-07-24-174930
Then if you check the API, you will get your first name, last name, and the checkbox as true, wrapped in an object.

## alert option npm package

https://www.npmjs.com/package/js-alert
