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
At first glance I thought this would be simple enough to run through each database file, normalize all the data into structured objects, something like this:
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
But I figured I would be better served to just throw together a quck sqlite database. 
As far as the UI, I actually don't know how to set up a cli program and figured it would be faster for me to just whip up a minimal react app.

# Status

It was mostly a rush job, I was only able to work on it for two days given some other obilgations, but It's functional enough. The searches only pull the first matching result regardless of the search term or type of object being searched. Obviously a search on 'type' === question would pull up a whole list of tickets, but I was pretty time constrained so I went for a simple approach.

# Stack
Node/Express \
Sqlite \
React


