# orange-shine

A simple web application to perform a search on a SQLite database seeded by JSON files

# Installation and Run
To run this install the latest version of node.
Then in the root folder of the project run
```
npm install
npm run install_subfolders
npm run start
```

# Considerations and Motivations

### Process
I was only able to work on it for two days given some personal obilgations, but finished basic functionality

I wanted to create the entire application using JavaScript given that i'ts the language that I'm most comfortable with. With that in mind, I used Typeorm to manage the database since its annotation features were similar enough to Spring Boot and made the learning curve easier. I chose SQLite as a database due to it's quick setup and installation with node. I used Express to handle requests given its simplicity, wide use, and seamless integration with Node.

For the UI, I considered setting up a cli program but figured it would be faster for me to stick to what I'm comfortable with and whip up a minimal react app.

### Next Steps
- I saw possible relations in the data between tickets and users with submitter_id, asignee_id, requester_id. I would establish those relations and pull related data when making queries.
- Currently the backend returns a single entity per request for ease of handling on the frontend. I would return a list of all matching entities and frontend should handle it accordingly. e.g. ticket.type == 'question' should pull up its an entire list of results.

### Data Management
At first glance I thought it would be simple enough to run through each database file and normalize all the data into structured objects (see below). In the end, I decided I would be better served by throwing together a quick sqlite database.

#### Example of normalized data
```
users: {
  _id: {
    1: { _id: 1, ... },
    2: { _id: 2, ... },
  },
  url: {
    http://tech.orangeshine.com/api/v2/users/1.json: { url: http://tech.orangeshine.com/api/v2/users/1.json, ....}
    http://tech.orangeshine.com/api/v2/users/2.json: { url: http://tech.orangeshine.com/api/v2/users/2.json, ... }
  },
  ...
 }
 ```



# Stack
Node/Express \
Sqlite \
React


