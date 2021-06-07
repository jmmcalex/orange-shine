# orange-shine

A simple web application to perform a search on a sqlite database seeded by json files

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
I was only able to work on it for two days given some other obilgations, but I managed basic functionality. 

I decided to build a basic backend with the 'controller repository service' pattern. I used 'typeorm' to manage the database, sqlite due to it's easy setup and installation with node, and express to handle requests. 

For the UI, I considered setting up a cli program but figured it would be faster for me to stick to what I'm comfortable with and whip up a minimal react app.

### Next Steps
- I saw possible relations in the data between tickets and users with submitter_id, asignee_id, requester_id. I would establish those relations and pull related data when making queries.
- Currently the backend returns a single entity per request for ease of handling on the frontend. I would return a list of all matching entities and frontend should handle it accordingly. e.g. ticket.type === 'question' should pull up its an entire list of results.

### Data Management
At first glance I thought this would be simple enough to run through each database file, normalize all the data into structured objects (see below), I decided  I would be better served to just throw together a quck sqlite database. 

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


