# Binary Synergy7 CH6

## Binar Car Rental API

### Installation

1. Clone this project into your local system using `git clone`.
2. Navigate to the cloned directory and open your IDE.
3. Install all necessary packages by running `npm install`.
4. Set up your PostgreSQL database.
5. Copy `.env.example` to `.env` and fill in the necessary details.
6. Migrate the tables to your database with `npm run migrate:latest`.
7. Populate the tables using:
   - `npx knex seed:run --specific=users.ts`
   - `npx knex seed:run --specific=cars.ts`
8. Start the server using `npm run dev`.
9. Access the API documentation at [http://localhost:3000/api-docs/](http://localhost:3000/api-docs/).

### Authentication

- **Register a New User**: `POST /api/auth/register`
- **User Login**: `POST /api/auth/login`
- **Get Current User**: `GET /api/auth/whoami`

### CRUD Operations for Users

- **Retrieve Users**: `GET /api/users`
- **Create a New User**: `POST /api/users`
- **Retrieve a User by Email**: `GET /api/users/email`
- **Update a User**: `PUT /api/users/{id}`
- **Delete a User**: `DELETE /api/users/{id}`

### CRUD Operations for Cars

- **Retrieve Cars**: `GET /api/cars`
- **Retrieve Available Cars**: `GET /api/cars/available`
- **Create a Car**: `POST /api/cars`
- **Update a Car**: `PUT /api/cars/{id}`
- **Delete a Car**: `DELETE /api/cars/{id}`

### Log Management

- **Retrieve All Logs**: `GET /api/logs`
- **Retrieve Insert Logs**: `GET /api/logs/insert`
- **Retrieve Update Logs**: `GET /api/logs/update`
- **Retrieve Delete Logs**: `GET /api/logs/delete`

---
