## S.H.A.C.K. - Stopping Hunger Among Community Kids
This front end project was created for The Underprivileged Children Foundation as a means to track meal requests from visitors, mark them as served, send updates to the people requesting meals, and showcase the meal requests vs. served meals.  This application is called SHACK - Stopping Hunger Among Community Kids after the foundation's program aimed at serving local children free meals upon request.  The project was built with users and visitors in mind, as it removes all of the guess work of creating, reading, updating, and deleting updates and meal requests to allow the foundation to serve as many local children as possible by knowing the location and demand.  The goal was to create an application anyone can use that reduces waste while also displaying the results of donations to past, present, and future benefactors for the foundation.  This app is built with React.js, JavaScript, CSS, and Bootstrap.

## Preview
### Home Page
This page gives a brief overview of the purpose of the application.  The Home page will also lead visitors to the foundation's website.
![image](https://user-images.githubusercontent.com/62181538/90636035-075e9700-e1f8-11ea-92ef-751cfed33443.png)

### Stats Page
This displays meals served vs. meal requests by age, neighborhood, and month in various formats.
![image](https://user-images.githubusercontent.com/62181538/90636174-3bd25300-e1f8-11ea-96a8-5cc82edc6c42.png)

![image](https://user-images.githubusercontent.com/62181538/90636351-789e4a00-e1f8-11ea-95a8-0f7270ec8166.png)

![image](https://user-images.githubusercontent.com/62181538/90636479-a6838e80-e1f8-11ea-9793-553274b1e6b8.png)

![image](https://user-images.githubusercontent.com/62181538/90636585-d337a600-e1f8-11ea-94ce-a921cf1b83c7.png)

![image](https://user-images.githubusercontent.com/62181538/90636701-011cea80-e1f9-11ea-9d8c-2dec4ed6a4ff.png)

### Updates Page
These updates can only be created, edited, and deleted by actual users, but they can be displayed to all visitors allowing them to know when their food truck will arrive in their neighborhood along with a menu.
![image](https://user-images.githubusercontent.com/62181538/90636960-5d800a00-e1f9-11ea-936c-9683e0d546c5.png)

### Meal Request Form
This is a simple form for visitors to fill out to request a meal.  Upon submission, the visitor is lead to a confirmation page that will give him or her the option to view updates or submit another meal request.  Visitors to the website cannot perform CRUD tasks on meal requests or view meal requests from other visitors.
![image](https://user-images.githubusercontent.com/62181538/90637093-8a342180-e1f9-11ea-964e-2e31d542efd2.png)

### Meal Request Page
This page is only available to users for the application and not accessible to visitors requesting meals.  This page allows the users to view the number of meal requests by neighborhood along with the request details.  The user can then mark the meals as served, removing them from view.
![image](https://user-images.githubusercontent.com/62181538/90637199-b485df00-e1f9-11ea-8d4b-d224cc3af9ec.png)


## Installation and Setup Instructions

Clone Down this repository.  You will need node and npm installed globally on your machine.

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To run with the seed data `json-server -w shack.json -p 8000`.



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
