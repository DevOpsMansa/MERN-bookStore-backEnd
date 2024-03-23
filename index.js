// Load environment variables from .env file
require("dotenv").config();

//imports
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors()); // Cross-Origin Resource Sharing middleware
app.use(express.json()); // Middleware to parse JSON requests

// Root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// MongoDB configuration
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = process.env.MONGO_URL; // Use environment variable

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection collection of books
    const bookCollections = client.db("BookInventory").collection("Books");

    // Insert a book into the database: POST method
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      // console.log(data);
      const result = await bookCollections.insertOne(data);
      res.send(result);
    });

    // // get all books from db
    // app.get("/all-books", async (req, res) => {
    //     const books = bookCollections.find();
    //     const result = await books.toArray();
    //     res.send(result)
    // })

    // Get all books or filter by category: GET method
    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }
      const result = await bookCollections.find(query).toArray();
      res.send(result);
    });

    // update  books method in db: patch method
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id);
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          ...updateBookData,
        },
      };
      const options = { upsert: true };
      const result = await bookCollections.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });

    // Delete a book from the database: DELETE method
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.deleteOne(filter);
      res.send(result);
    });

    // Get a single book's data from the database: GET method
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.findOne(filter);
      res.send(result);
    });

    // Ping the deployment to confirm a successful connection to MongoDB
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
// Call the run function and handle errors
run().catch(console.dir);

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
