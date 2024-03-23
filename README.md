# MERN-bookStore-backEnd

### Per Scholas 2024 capStone Project

## **Project Description**

A Book Store App Website built on MERN Developer Stack (React JS, MongoDB, Express, and Node JS) with Inventory Management,  is a sophisticated and dynamic web application designed to facilitate the operations of a modern book store. 
this application offers a powerful combination of technologies to provide a seamless user experience for both customers and store managers.
The MERN Book Store App Website with Inventory Management provides a complete solution for both customers and store managers, offering a convenient and secure platform for book purchasing and inventory management. Its modern and efficient design ensures a delightful user experience and enables the smooth operation of a contemporary bookstore in the digital age.


## KEY:
Begin with the end in mind. Know where you want to go by planning with sketches and functionality ideas so you do not waste time building things that you do not need. 

## Highlighted  features of the MERN Book Store App Website with Inventory Management include:

### User-Friendly Interface
The front-end is developed using React, providing a responsive and intuitive user interface that works seamlessly on various devices, from desktops to smartphones.


### Inventory Management:
The application includes a comprehensive inventory management system that allows store managers to add, edit, and delete books, track stock levels, and manage book details such as title, author, genre, price, and more. Bringing in the CRUD effect to the application

### User Authentication
User authentication and authorization are implemented to ensure secure access to the system. Customers can create accounts, log in, and place orders, while store managers have access to advanced features for managing the inventory.

### Search and Filtering
Users can search for books using keywords and apply various filters, such as genre, author, and price range, to find the books they are interested in quickly.

### Responsive Design
The website is designed to be responsive, ensuring a consistent and user-friendly experience across various devices and screen sizes.


### Admin Dashboard
Store managers can access a dedicated admin dashboard where they can view real-time inventory status, monitor sales, and manage orders, customers, and user accounts.
	
## Project Phases:

 ### Project Timeline:
    * Planning Phase: 1 day
    * Backend Development: 1 days
    * Frontend Development: 2 days
    * Inventory Management: 2 days
    * Testing: 1 days
    * Deployment: 1 days
    * Documentation and Training: N/A
    * Maintenance and Support: N/A

 ### Planning Phase:
    * Define project scope, objectives, and requirements.
    * Identify key features and functionalities.
    * Create wireframes and user interface designs.
    * Set up project management tools and communication channels.

 ### Backend Development:
    * Folder Structure 
    bookStore - capStone
        Mern-Server (Back-end)
			index.js File - Main entry point
			.env file - Keep top secrets
			.gitignore - ignore top secret file in github and more
			README.md - Project details

* Set up the Node.js environment.
* Initialize Express.js framework for building RESTful APIs.
* Design MongoDB database schema for books and inventory management.
* Implement CRUD (Create, Read, Update, Delete) operations for books and inventory.
* Implement user authentication and authorization using JWT (JSON Web Tokens).
* Test API endpoints using Postman or similar tools.
* Include at least one form of user authentication/authorization within the application.

### Frontend Development:
Folder Structure
Set up React.js environment using Create React App.
Develop UI components based on wireframes and designs.
Implement routing using React Router.
Integrate APIs to fetch and display book data.
Implement user authentication and authorization flows.
Develop forms for user interaction such as login, registration, and checkout.
Use CSS to style the application.
Create at least four different views or pages for the application.
Create some form of navigation that is included across the application’s pages, utilizing React Router for page rendering.
Ensure responsiveness and cross-browser compatibility.
 ### Inventory Management:
Develop admin panel UI for inventory management.
Implement functionalities for adding, editing, and deleting books.
Incorporate search and filter options for easy inventory management.
Implement notifications for low stock or out-of-stock items.
Secure admin functionalities with appropriate authorization.
 ### Testing:
Conduct unit testing for backend APIs and frontend components.
Perform integration testing to ensure smooth interaction between front-end and back-end.
Carry out user acceptance testing (UAT) to validate the application against requirements.
Fix any bugs or issues identified during testing.
 ### Deployment:
Set up production environment for both frontend and backend.
Configure continuous integration and deployment (CI/CD) pipelines.
Deploy the application to a cloud platform such as AWS, Azure, or Heroku.
Set up domain and SSL certificate for secure access.
Monitor application performance and scalability.
 ### Documentation and Training:
Create user manuals and technical documentation.
Provide training sessions for store administrators on how to use the application.
Document API endpoints and data models for future reference.
 ### Maintenance and Support:
Establish a maintenance plan for regular updates and bug fixes.
Set up monitoring tools to track application performance and user activity.
Provide ongoing support to address user inquiries and issues.
Plan for future enhancements and feature updates based on user feedback.
	 ### Project Status:
At this time this project is set to complete a capstone project for school. In the future am open to collaborating and bringing it to completion as a fully operational MERN stack website that is open to users as needed.

### Resources
* Express JS: https://expressjs.com/en/starter/installing.html
* Installing
    Assuming you’ve already installed Node.js, create a directory to hold your application, and make that your working directory.
    $ mkdir myapp
    $ cd myapp


    Use the npm init command to create a package.json file for your application. For more information on how package.json works, see Specifics of npm’s package.json handling.
    $ npm init


    This command prompts you for a number of things, such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults for most of them, with the following exception:
    entry point: (index.js)


    Enter app.js, or whatever you want the name of the main file to be. If you want it to be index.js, hit RETURN to accept the suggested default file name.
    Now install Express in the myapp directory and save it in the dependencies list. For example:
    $ npm install express


    To install Express temporarily and not add it to the dependencies list:
    $ npm install express --no-save


    By default with version npm 5.0+ npm install adds the module to the dependencies list in the package.json file; with earlier versions of npm, you must specify the --save option explicitly. Then, afterwards, running npm install in the app directory will automatically install modules in the dependencies list.
    Next: Hello World
    Embedded below is essentially the simplest Express app you can create. It is a single-file app — not what you’d get if you use the Express generator, which creates the scaffolding for a full app with numerous JavaScript files, Jade templates, and sub-directories for various purposes.

    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (req, res) => {
    res.send('Hello World!')
    })

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })

    This app starts a server and listens on port 3000 for connections. The app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.

* Database used MongoBD: https://www.mongodb.com
* MongoDB CRUD : https://www.mongodb.com/docs/manual/crud/
* Postman to test  : https://www.postman.com/
* Book Data fetching : https://www.goodreads.com/


## Author
Eric (Mansa) Marah