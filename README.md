
# Angular In-Memory Web API - POC

Project which demonstrates the real time usage of `angular-in-memory-web-api` library.

[angular-in-memory-web-api](https://github.com/angular/in-memory-web-api) library works by intercepting all the HTTP calls in your application and returning some data you defined instead data from actual backend. Without this library, the calls would otherwise go to the remote server. This library redirects them to an in-memory data store that you control in the frontend.
## What's included

- Took a simple [use case](#functionality-overview) and performed CRUD operations.
- Using HttpInterceptor in angular, tested whether calls are getting intercepted while using this library
## Technology Stack

- Angular: 9.1.13
- angular-in-memory-web-api: 0.9.0
- angular/material: 9.2.4
## Notes

This library has limited capabilities, and it is not intended for use in production. Couple of ways to restrict this library in production are
- Install angular-in-memory-web-api as a dev dependency.
    ```
    npm install angular-in-memory-web-api --save-dev
    ```

- Import HttpClientInMemoryWebApiModule in app.module.ts, only if app is not in production mode.
  ```
   environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ```
## Run Locally

Clone the project

```bash
  git clone https://github.com/prashanthcharla/angular-in-memory-web-api-poc.git
```

Go to the project directory

```bash
  cd college-demo
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Functionality Overview

This application is responsible for storing and modifying the college details. It also provides option to manage students and lecturers in a college.

On the landing page of the application, a list of colleges will be displayed. You can find two buttons `Add College` and `Update College` on the page. When you click on any of those buttons, a dailog will get opened with a form that help users to add or modify college details.

When you click on a college, it will get expanded and will display the students and lecturers details in individual tables. Upon each table, you can find appropriate `Add & Update` buttons that let's users to add/modify the students/lecturers details.



## Screenshots
`Landing Page`

![List of colleges](https://raw.github.com/prashanthcharla/angular-in-memory-web-api-poc/main/college-demo/src/assets/images/collegeList.jpg?raw=true "Optional Title")

`Add College`

![Add College](https://raw.github.com/prashanthcharla/angular-in-memory-web-api-poc/main/college-demo/src/assets/images/addCollege.jpg?raw=true "Optional Title")

`Expanded view of a college` Here you can observe the buttons which are used to add, update and delete students. You can find similar ones for lecturers if you navigate to them by clicking on lecturers tab.

![Expand College](https://raw.github.com/prashanthcharla/angular-in-memory-web-api-poc/main/college-demo/src/assets/images/listOfStudents.jpg?raw=true "Optional Title")

`Add Student`

![Add Student](https://raw.github.com/prashanthcharla/angular-in-memory-web-api-poc/main/college-demo/src/assets/images/addStudent.jpg?raw=true "Optional Title")

`Update Student`

![Update Student](https://raw.github.com/prashanthcharla/angular-in-memory-web-api-poc/main/college-demo/src/assets/images/updateStudent.jpg?raw=true "Optional Title")

`Delete Student`

![Delete Student](https://raw.github.com/prashanthcharla/angular-in-memory-web-api-poc/main/college-demo/src/assets/images/deleteStudent.jpg?raw=true "Optional Title")

`Spinner` For every CRUD action, loader will be displayed which tells the user that the data load/refresh is happening. 

![Spinner](https://raw.github.com/prashanthcharla/angular-in-memory-web-api-poc/main/college-demo/src/assets/images/spinner.jpg?raw=true "Optional Title")
## Author

- [@prashanthcharla](https://github.com/prashanthcharla)

