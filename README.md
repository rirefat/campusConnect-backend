# CampusConnect Backend

CampusConnect is a backend application designed to manage university operations, including student and user management. The application is built with Node.js, Express, and TypeScript, providing a robust and scalable architecture.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Configuration](#configuration)
- [Error Handling](#error-handling)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- User management (registration, authentication, authorization)
- Student management (CRUD operations)
- Centralized error handling
- TypeScript for type safety
- Configurable via environment variables
- Ready for deployment on Vercel

## Project Structure
```
src/
├── app.ts
├── server.ts
├── app/
│   ├── config/
│   │   └── index.ts
│   ├── middlewares/
│   │   ├── globalErrorHandler.ts
│   │   └── notFoundRoute.ts
│   ├── modules/
│   │   ├── student/
│   │   │   ├── student.controller.ts
│   │   │   ├── student.interface.ts
│   │   │   ├── student.model.ts
│   │   │   ├── student.route.ts
│   │   │   ├── student.service.ts
│   │   │   └── student.validation.ts
│   │   └── user/
│   │       ├── user.controller.ts
│   │       ├── user.interface.ts
│   │       ├── user.model.ts
│   │       ├── user.router.ts
│   │       ├── user.service.ts
│   │       └── user.validation.ts
│   └── routes/
│       └── index.ts
│   └── utils/
│       └── sendResponse.ts
package.json
tsconfig.json
vercel.json
```

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/rirefat/campusConnect-backend.git
    cd campusConnect-backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the necessary environment variables (refer to `src/app/config/index.ts` for required variables).

## Usage

1. Start the development server:
    ```sh
    npm run dev
    ```

2. Build the project:
    ```sh
    npm run build
    ```

3. Start the production server:
    ```sh
    npm start
    ```

## API Documentation

### User Routes

- `POST /api/users` - Register a new user
- `POST /api/users/login` - User login

### Student Routes

- `GET /api/students` - Get all students
- `POST /api/students` - Create a new student
- `GET /api/students/:id` - Get a student by ID
- `PUT /api/students/:id` - Update a student by ID
- `DELETE /api/students/:id` - Delete a student by ID

## Configuration

The application can be configured via environment variables. The following variables are required:

- `PORT`: Port on which the server runs
- `DATABASE_URL`: Database connection string

## Error Handling

Global error handling is implemented in `src/app/middlewares/globalErrorHandler.ts`. 404 errors are handled by `src/app/middlewares/notFoundRoute.ts`.

## Deployment

The application is configured for deployment on Vercel. Ensure that `vercel.json` is properly set up and environment variables are configured in the Vercel dashboard.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.
