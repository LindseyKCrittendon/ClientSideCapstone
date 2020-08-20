## S.H.A.C.K. - Stopping Hunger Among Community Kids
  An application used to track requested meals and served meals for The Underprivileged Children Foundation built with React.js, JavaScript, CSS, and Bootstrap.

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

This app utilizes chartjs which can be intalled by `npm install react-chartjs-2`.


## Reflection
This front-end project was created for The Underprivileged Children Foundation as a means to track meal requests from visitors, mark them as served, send updates to the people requesting meals, and showcase the meal requests vs. served meals.  This project was built as part of a front-end capstone project for NewForce, and I saw an opportunity to solve a real-world problem with React. It was built in a two-week sprint. 

The application was built with users and visitors in mind, as it removes all of the guess work of creating, reading, updating, and deleting updates and meal requests to allow the foundation to serve as many local children as possible by knowing the location and demand.  The goal was to create an application anyone can use that reduces waste while also displaying the results of donations to past, present, and future benefactors for the foundation.

The most challenging part of the application was finding a way for the meal requests, meals served, and demographics to display in charts and graphs automatically, so information could display in real time with every new request and served meal by pushing the received data into state.  Each new meal, child, neighborhood, and served meal instantly updates the charts, graphs, and tables.  

It was also challenging to conditionally render every aspect of the app, as I wanted to differentiate between visitors and actual users of the application.  Every page conditionally renders information depending on whether or not the user is logged in.  This allows visitors to view stats, updates, and place meal requests.  The visitor receives a confirmation message in return along with a limited number of options to guide the user through the website.  The user can perform CRUD on all information entered into the database aside from served meals to ensure accurate reporting.  Users can mark meal requests as individually served and toggle between requested and served meals.

