# Contents
1. [Difference between MySQL and PostgreSQL](#difference-between-mysql-and-postgresql)
2. [What is Store Procedure?](#what-is-store-procedure)
3. [What is SQL - Transactions](#what-is-sql---transactions)
4. [SQL Joins](#sql-joins)
5. [SQL vs NoSQL](#sql-vs-nosql)
6. [What is MongoDB – Working and Features](#what-is-mongodb-–-working-and-features)
7. [Object Data Modeling (ODM)](#object-data-modeling-odm)
8. [Mongoose, Mongoose.connect, Mongoose.Schema, Mongoose.Model](#mongoose-mongooseconnect-mongooseschema-mongoosemodel)


## Difference between MySQL and PostgreSQL

-----------------------------------------------------
| MySQL | PostgreSQL    |
|-------|---------------|
| It is one of the most famous, open-source Relational database management systems (RDMS). The data in this table is stored in tables which makes it easy to perform CRUD operations (Create, Read, Update and Delete)  | It is a powerful, open-source Object-relational database system. It provides good performance with low maintenance efforts because of its high stability.PostgreSQL was the first DBMS that implemented the multi-version concurrency control (MVCC) feature.
| Fast, easy, and reliable. Can be used for both large and small applications. Provides high scalability    | Some of the highlights of PostgreSQL are:  Support for the vast amount of languages. It provides advanced security features. It has geo-tagging support.
| MySQL is a pure relational database (RDBMS). | PostgreSQL is an object-relational database (ORDBMS) 
| It doesn’t provide support for Materialised views and Table inheritance. | PostgreSQL provides both of them.
| It is reliable, simple, and faster.   | It is slower and more complex.
| 	It is best suitable for simple operations like write and reading.   | It is commonly used for large and complex operations.
| Do you need a simpler database that’s easy to set up and manage, fast, reliable, and well-understood? MySQL is ideal.     | Do you need a feature-rich database that can handle complex queries and massive databases? Postgres could be your choice thanks to its scalability.
| Supported Data Types: Numeric ,Date/time ,Character ,JSON ,Boolean ,Enumerated ,XML ,Geometric ,Arrays ,Ranges ,Network address ,HSTOREComposite | Numeric, Date/time, Character, JSON, Spatial
----------------------

**[⬆ Back to Top](#contents)**

## [What is Store Procedure?](https://www.geeksforgeeks.org/what-is-stored-procedures-in-sql/)
Stored procedures are prepared SQL code that you save so you can reuse it over and over again. So if you have an SQL query that you write over and over again, save it as a stored procedure and call it to run it. You can also pass parameters to stored procedures so that the stored procedure can act on the passed parameter values.

Stored Procedures are created to perform one or more DML operations on Database. It is nothing but the group of SQL statements that accepts some input in the form of parameters and performs some task and may or may not return a value. 

Creating a Procedure 
```
CREATE PROCEDURE procedure_name
(parameter1 data_type, parameter2 data_type, …)
AS
BEGIN
   — SQL statements to be executed
END
```
To Execute the procedure
```
EXEC procedure_name parameter1_value, parameter2_value, ..
```

Example
```
-- Create a new table named "Customers"
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(50),
    ContactName VARCHAR(50),
    Country VARCHAR(50)
);

-- Create a stored procedure named "GetCustomersByCountry"
CREATE PROCEDURE GetCustomersByCountry
    @Country VARCHAR(50)
AS
BEGIN
    SELECT CustomerName, ContactName
    FROM Customers
    WHERE Country = @Country;
END;

-- Execute the stored procedure with parameter "Sri lanka"
EXEC GetCustomersByCountry @Country = 'Sri lanka';
```

**[⬆ Back to Top](#contents)**

## [What is SQL - Transactions](https://www.tutorialspoint.com/sql/sql-transactions.htm)
A SQL transaction is a grouping of one or more SQL statements that interact with a database. A transaction in its entirety can commit to a database as a single logical unit or rollback (become undone) as a single logical unit. In SQL, transactions are essential for maintaining database integrity.

## SQL Joins
There are different types of joins available in SQL:
* INNER JOIN: returns rows when there is a match in both tables.
* LEFT JOIN: returns all rows from the left table, even if there are no matches in the right table.
* RIGHT JOIN: returns all rows from the right table, even if there are no matches in the left table.
* FULL JOIN: combines the results of both left and right outer joins.

**Table A**

| id  | first_name    | last_name
|---    | ---    | ---
1   | Surajit   | Malik
2   | Avijit    | Malik
3   | Abir      | Malik
4   | Ram       | Rakhit

**Table B**

| id2  | age |
|---    |--- 
1   | 29 
2   | 32   
3   | 4    
5   | 33    

**Inner Join**
```
SELECT TableA.firstName,TableA.lastName,TableB.age,TableB
    FROM TableA INNER JOIN TableB 
    ON TableA.id = TableB.id2;
```

**Result**

| first_name    | last_name | age |
|---    | ---    | --
 Surajit   | Malik | 29
 Avijit    | Malik | 32
 Abir      | Malik | 4

**Left Join**
```
SELECT TableA.firstName,TableA.lastName,TableB.age,TableB
    FROM TableA LEFT JOIN TableB 
    ON TableA.id = TableB.id2;
```

**Result**

| first_name    | last_name | age |
|---    | ---    | --
 Surajit   | Malik | 29
 Avijit    | Malik | 32
 Abir      | Malik | 4
Ram        | Rakhit | NULL

**[⬆ Back to Top](#contents)**

## SQL vs NoSQL
![](./images/SQL%20vs%20NoSQL.jpeg)

## [What is MongoDB – Working and Features](https://www.geeksforgeeks.org/what-is-mongodb-working-and-features/)
MongoDB is an open-source document-oriented database that is designed to store a large scale of data and also allows you to work with that data very efficiently. It is categorized under the NoSQL (Not only SQL) database because the storage and retrieval of data in the MongoDB are not in the form of tables.

## Object Data Modeling (ODM)
Object Data Modeling (ODM) is a programming technique used in the context of working with databases, particularly NoSQL databases like MongoDB. ODM is similar to Object-Relational Mapping (ORM) used with relational databases but is tailored for the needs of NoSQL databases.

ODM involves mapping the data stored in a NoSQL database (typically documents in collections) to objects in an application's programming language (e.g., JavaScript objects in Node.js). It bridges the gap between the data stored in the database and the objects used in application code, allowing developers to work with data in a more natural, object-oriented way.

Here are some key concepts and benefits of Object Data Modeling:

Schema Definitions: Just like Object-Relational Mapping (ORM) with relational databases, ODM involves defining schemas. These schemas define the structure of the data in the database, specifying the fields, their data types, validation rules, and default values.

Object-Oriented Approach: ODM allows developers to work with data in a way that aligns with the object-oriented programming paradigm. Instead of dealing with raw database queries and documents, developers can work with JavaScript objects that map to the data stored in the database.

Data Validation: ODM frameworks often include built-in data validation. This means that data is validated against the schema before it's stored in the database, ensuring data integrity and consistency.

Abstraction: ODM provides an abstraction layer that shields developers from the intricacies of the database system. Developers can focus on their application's business logic rather than dealing with database-specific details.

Relationships: ODM frameworks typically support defining and working with relationships between documents or objects, such as one-to-one, one-to-many, or many-to-many relationships.

Middleware and Hooks: Many ODM frameworks allow developers to define middleware or hooks that can be executed before or after certain operations, like data validation or document saving. This provides flexibility in customizing behavior.

Query Language: ODM frameworks often provide their own query languages or methods for performing database queries. These queries are often more expressive and tailored to the specific database system.

Performance Optimization: ODM frameworks may include features for optimizing database interactions, such as caching and batch operations.

Change Tracking: Some ODM frameworks track changes made to objects, making it easier to update the corresponding data in the database.

Popular ODM libraries in the JavaScript/Node.js ecosystem include Mongoose for MongoDB and ODMs for other NoSQL databases like Cassandra, Couchbase, and more. These libraries simplify the process of working with NoSQL databases and provide a structured and consistent way to model and interact with data

## [Mongoose, Mongoose.connect, Mongoose.Schema, Mongoose.Model](https://chat.openai.com/c/31b724bb-c7c4-42dc-af2e-497e2fb1803c)

```
mongoose.connect(configOptions.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```
 The line of code you provided is used to establish a connection to a MongoDB database using Mongoose, which is an Object Data Modeling (ODM) library for MongoDB and Node.js. Let's break down the code step by step:

mongoose.connect: This is a method provided by the Mongoose library that is used to establish a connection to a MongoDB database. It takes two main arguments: the database connection URI and an options object.

configOptions.database: This part of the code refers to a variable named configOptions (presumably defined elsewhere in your code) that holds configuration settings, including the URI (Uniform Resource Identifier) of the MongoDB database you want to connect to. The .database property of configOptions likely contains the MongoDB URI.
The options object: The second argument passed to mongoose.connect is an options object that configures how the connection is established and maintained. In your code, two options are being set:

useNewUrlParser: true: This option is used to enable the new URL parser for the MongoDB driver. The MongoDB Node.js driver has gone through different versions, and the URL parsing mechanism has evolved. By setting this option to true, you're telling Mongoose to use the new and improved URL parsing.

useUnifiedTopology: true: This option enables the use of the new unified topology engine in the MongoDB driver. The unified topology engine is designed to handle monitoring server topology changes more efficiently and provides a more stable and efficient connection pool.

Putting it all together, the code you provided establishes a connection to a MongoDB database using Mongoose. It uses the MongoDB URI provided in the configOptions.database variable, and it configures the connection to utilize the new URL parsing mechanism and the unified topology engine for improved performance and stability.

Remember that this code snippet is typically just the beginning of working with a MongoDB database using Mongoose. After establishing the connection, you would typically define and work with Mongoose models and schemas to interact with your database collections.

### Mongoose.schema
In Mongoose, a schema is a blueprint that defines the structure and shape of documents within a MongoDB collection. It provides a way to enforce data validation, specify the types of data that can be stored, set default values, and define relationships between different types of data. Here's an explanation of key concepts related to Mongoose schemas:

Schema Definition: When you create a Mongoose schema, you specify the fields or properties that a document should have, along with their data types. For example, you might define a schema for a "User" document like this:

javascript
Copy code
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  age: Number,
});
In this example, we've defined a schema for a user with three properties: username, email, and age. These properties can store strings and numbers.

Data Validation: Schemas allow you to set validation rules for each field. For instance, you can specify that the email field must be a valid email address:

javascript
Copy code
const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/,
  },
  age: Number,
});
In this example, we've added validation rules like required (must be present), unique (must be unique in the collection), and match (must match a regular expression pattern).

Default Values: You can set default values for fields in a schema. If a field is not provided when creating a document, it will default to the specified value:

javascript
Copy code
const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 25,
  },
});
In this case, if no age is provided when creating a user document, it will default to 25.

Relationships: Schemas can define relationships between documents. For example, you can reference other schemas within a schema to establish relationships like one-to-one or one-to-many:

javascript
Copy code
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
});
In this example, the userSchema includes a posts field that references an array of Post documents.

Methods and Middleware: Mongoose schemas also allow you to define methods and middleware functions that can be applied to documents or queries. This is useful for custom behavior, such as pre-processing data before saving it to the database or defining custom methods for documents.

In summary, a Mongoose schema is a fundamental component for defining the structure, validation, and behavior of documents within a MongoDB collection. It helps maintain data consistency and enables you to work with MongoDB in a more structured and organized manner within a Node.js application.

### Mongoose.model
In Mongoose, mongoose.model is a method that allows you to create and compile a model based on a defined schema. A model represents a specific collection in your MongoDB database and provides an interface for querying, creating, updating, and deleting documents in that collection. Here's an explanation of how mongoose.model works and its key components:

Schema: Before creating a model, you need to define a schema that specifies the structure of the documents you intend to store in a MongoDB collection. The schema defines the fields, their types, validation rules, default values, and any other configuration related to the data structure.

javascript
Copy code
const mongoose = require('mongoose');

// Define a schema for a "User" document
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  age: Number,
});
Creating a Model: Once you have a schema in place, you can use mongoose.model to create a model that corresponds to a specific collection in your database. The method takes two arguments: the name of the model and the schema to be associated with it.

javascript
Copy code
// Create a "User" model based on the "userSchema" schema
const User = mongoose.model('User', userSchema);
In this example, we've created a "User" model that will interact with a "users" collection in the MongoDB database.

Using the Model: Once the model is created, you can use it to perform various database operations such as inserting, querying, updating, and deleting documents in the associated collection. Here are some common operations:

Creating a Document:

javascript
Copy code
const newUser = new User({
  username: 'john_doe',
  email: 'john@example.com',
  age: 30,
});

newUser.save(); // Save the new user to the database
Querying for Documents:

javascript
Copy code
// Find all users
User.find({}, (err, users) => {
  if (err) throw err;
  console.log(users);
});

// Find a user by username
User.findOne({ username: 'john_doe' }, (err, user) => {
  if (err) throw err;
  console.log(user);
});
Updating Documents:

javascript
Copy code
// Update a user's age
User.updateOne({ username: 'john_doe' }, { age: 31 }, (err) => {
  if (err) throw err;
  console.log('User updated');
});
Deleting Documents:

javascript
Copy code
// Delete a user by username
User.deleteOne({ username: 'john_doe' }, (err) => {
  if (err) throw err;
  console.log('User deleted');
});
These are just a few examples of what you can do with a Mongoose model. The model provides a powerful and structured way to interact with your MongoDB database within your Node.js application.

In summary, mongoose.model is used to create a model based on a defined schema, which allows you to work with MongoDB collections in a more organized and consistent manner, providing an abstraction layer for database operations.