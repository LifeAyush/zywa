# Card Status API

This project implements an API to retrieve the status of a user's card based on the provided phone number or card ID. The API is built using Node.js and Express, with MongoDB as the database to store card-related information.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Possible Improvements](#possible-improvements)
- [Contributing](#contributing)
- [License](#license)

## Features

- **get_card_status Endpoint**: Allows users to query the database for the status of a card using either the phone number or card ID.
- **MongoDB Database**: Utilizes MongoDB to store card-related information from various sources.
- **Express Framework**: Implements the API using the Express framework to handle routing and HTTP requests.
- **EJS for UI**: Provides a simple UI using EJS for users to input queries and view card status.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose (MongoDB ODM)
- EJS (Embedded JavaScript)
- HTML/CSS

## Getting Started

1. Clone the repository:

   ```CMD
   git clone https://github.com/LifeAyush/zywa.git
   cd zywa

   ```

2. Install dependencies:

   ```CMD
   npm install

   ```

3. Set up MongoDB:

   - Ensure you have MongoDB installed and running.
   - Update the MongoDB connection string in .env file.
   - Example: MONGODB_URI=mongodb://127.0.0.1:27017/'your_connection_string'

4. Run MongoDB:

   ```CMD
   mongod

   ```

5. Run Script to parse CSV Data:

   ```CMD
   node scripts/parseData.js

   ```

6. Run the Express Server:

   ```CMD
   node src/app.js

    - This will start the server, and you should see a message indicating that it's running on a specific port (default is 3000).
   ```

## Usage

- Access the web interface at http://localhost:3000 to input phone numbers or card IDs and view card status.
- Use the get_card_status API endpoint with the query parameter input to programmatically retrieve card status.

## Possible Improvements

- **Input Validation**: Implement more robust input validation for phone numbers and card IDs.
- **Authentication and Authorization**: Add authentication and authorization mechanisms to secure the API.
- **Logging**: Enhance logging for better debugging and monitoring.
- **Testing**: Integrate testing frameworks for unit testing and API testing.
