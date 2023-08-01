# Contents
1. [Difference between MySQL and PostgreSQL](#difference-between-mysql-and-postgresql)
2. [What is Store Procedure?](#what-is-store-procedure)
3. [What is SQL - Transactions](#what-is-sql---transactions)
4. [SQL Joins](#sql-joins)
5. [SQL vs NoSQL]


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
