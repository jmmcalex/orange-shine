import * as cors from 'cors';
import * as express from "express";
import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import Router from "./routes";
import * as Organizations from "./seeds/organizations.json";
import * as Tickets from "./seeds/tickets.json";
import * as Users from "./seeds/users.json";

const PORT = 8000;
const app = express();
app.use(cors());
app.use(Router);

createConnection()
  .then(async (connection: Connection) => {

    /**
     * Start up database. Definitely not robust, but good enough for now
     */
    console.log('Seeding new database');
    await connection.synchronize(true);
    Organizations.forEach(async (organization) => {
      await connection.createQueryBuilder().insert().into('Organization').values(organization).execute();
    })

    Users.forEach(async (user) => {
      await connection.createQueryBuilder().insert().into('User').values(user).execute();
    })

    Tickets.forEach(async (ticket) => {
      await connection.createQueryBuilder().insert().into('Ticket').values(ticket).execute();
    })

    /**
     * Start server
     */
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    })

  })
  .catch(error => {
    console.log("Unable to connect to db", error);
    process.exit(1)
  });
