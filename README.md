# Mongoose Practice

A backend practice project built with **Node.js, Express.js, MongoDB, and Mongoose**.

The project focuses on integrating an Express application with MongoDB through Mongoose and implementing basic User data operations through an HTTP API.

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Nodemon

## Project Structure

```text
mongoose-practice/
├── config/
│   └── db.js
├── models/
│   └── User.js
├── app.js
├── package.json
├── package-lock.json
└── .gitignore
```

## Database

The project connects to a local MongoDB database:

```text
mongodb://localhost:27017/blog
```

The main collection used by the application is:

```text
blog.users
```

## User Model

The current `User` schema includes:

```text
name
email
age
city
salary
```

## API Endpoints

### Get All Users

```http
GET /users
```

Returns all users from the `users` collection.

### Create a User

```http
POST /users
```

Accepts user data as JSON in the request body.

Example:

```json
{
  "name": "Ali",
  "email": "ali@example.com",
  "age": 25,
  "city": "Tehran",
  "salary": 5000
}
```

A successful request returns:

```text
201 Created
```

## Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The server runs on:

```text
http://localhost:3000
```

## Notes

This repository represents the current practice stage of the project. The implementation is intentionally kept simple to focus on the integration between **Express, Mongoose, and MongoDB** before applying further architectural improvements.
