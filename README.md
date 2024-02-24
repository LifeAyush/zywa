# Card Status API

This project implements an API to retrieve the status of a user's card based on the provided phone number or card ID. The API is built using Node.js and Express, with MongoDB as the database to store card-related information.

## Table of Contents

- [Technologies Used And Reasons](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Possible Improvements](#possible-improvements)


## Technologies Used And Reasons

- **Node.js**: Node.js is chosen for the backend server because of its event-driven, non-blocking architecture. This is beneficial for handling multiple concurrent requests efficiently. In your project, Node.js is used to create a server that listens for requests from the frontend, processes them, and communicates with the MongoDB database to retrieve card status information.
- **Express.js**: Express.js is a minimal and flexible web application framework for Node.js. It simplifies the process of defining routes and handling HTTP requests. In your project, Express is used to create routes for the API endpoints, such as /get_card_status. It helps in organizing the backend code and handling different types of requests, making it easier to manage and scale as the project evolves.
- **MongoDB**: MongoDB is a NoSQL database that stores data in a flexible, JSON-like format. It is chosen for this project because of its ability to handle diverse and evolving data structures. The card status information from various CSV files doesn't have a fixed schema, and MongoDB's schema-less nature accommodates this variability seamlessly.
- **Mongoose (MongoDB ODM - Object Data Modeling)**: Mongoose simplifies the interaction with MongoDB by providing a schema-based approach. In this project, Mongoose is used to define schemas for different types of cards (Pickup, DeliveryException, Delivered, Returned). This schema definition helps maintain a structured format for data, making it easier to work with, query, and ensure consistency.
- **EJS (Embedded JavaScript)**: EJS is used for rendering dynamic HTML content on the server side. In this project, EJS templates are utilized to create HTML pages that display the card status information. This allows for dynamic generation of HTML based on the data retrieved from the MongoDB database. EJS enables a seamless integration of JavaScript within HTML, facilitating the presentation of card status to users.
- **HTML/CSS**: HTML is employed to structure the content, and CSS is used for styling and layout. The HTML pages generated using EJS provide a user-friendly interface for inputting phone numbers or card IDs and viewing the corresponding card status. CSS enhances the visual presentation, ensuring a clean and organized display of information.

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
   ```
   This will start the server, and you should see a message indicating that it's running on a specific port (default is 3000).

## Usage

- Access the web interface at http://localhost:3000 to input phone numbers or card IDs and view card status.
- Use the get_card_status API endpoint with the query parameter input to programmatically retrieve card status.

## Possible Improvements

- **Input Validation**: Implement more robust input validation for phone numbers and card IDs.
- **Authentication and Authorization**: Add authentication and authorization mechanisms to secure the API.
- **Logging**: Enhance logging for better debugging and monitoring.
- **Testing**: Integrate testing frameworks for unit testing and API testing.
- **UI Enhancement**: Build a frontend application to give user a better understanding of their card status by listing all actions taken by Zywa to deliver their card.
