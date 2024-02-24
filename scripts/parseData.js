require("dotenv").config();
const fs = require("fs");
const csv = require("csv-parser");
const mongoose = require("mongoose");
const {
  Pickup,
  DeliveryException,
  Delivered,
  Returned,
} = require("../models/cardSchemas");


// Established MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Function to parse and insert data into MongoDB
async function parseCSVFile(filePath, Model) {
  return new Promise((resolve, reject) => {
    const data = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        let cardId, userId, timestamp;

        if (row["Card ID"]) {
          cardId = row["Card ID"];
        } else if (row["Card ID"] === undefined && row["CardId"]) {
          cardId = row["CardId"];
        } else {
          reject(
            new Error(`Invalid data in ${filePath}. Missing 'Card ID' column.`)
          );
          return;
        }

        if (row["User Mobile"]) {
          userId = row["User Mobile"];
        } else if (row["User contact"]) {
          userId = row["User contact"];
        } else {
          reject(
            new Error(
              `Invalid data in ${filePath}. Missing 'User Mobile' or 'User contact' column.`
            )
          );
          return;
        }

        if (row["Timestamp"]) {
          timestamp = row["Timestamp"];
        } else {
          reject(
            new Error(
              `Invalid data in ${filePath}. Missing 'Timestamp' column.`
            )
          );
          return;
        }

        data.push({
          cardId,
          userId,
          timestamp,
          comment: row["Comment"] || "",
        });
      })
      .on("end", async () => {
        try {
          await Model.insertMany(data);
          console.log(`${filePath} data loaded into MongoDB`);
          resolve();
        } catch (error) {
          console.error(
            `Error inserting data from ${filePath} into MongoDB: ${error.message}`
          );
          reject(error);
        }
      });
  });
}


// Parsing and inserting data from each CSV file
async function parseAllData() {
  try {
    await parseCSVFile("data/pickup.csv", Pickup);
    await parseCSVFile("data/delivery_exceptions.csv", DeliveryException);
    await parseCSVFile("data/delivered.csv", Delivered);
    await parseCSVFile("data/returned.csv", Returned);
    mongoose.disconnect(); // Close MongoDB connection
  } catch (error) {
    console.error(`Error parsing data: ${error.message}`);
  }
}

// Running the script
parseAllData();
