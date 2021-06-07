import * as express from "express";
import TicketController from "../controllers/ticket.controller";
import { ETicketFields } from "../entity/Ticket";
import { OrangeShineQuery } from "../types";

const router = express.Router();

/**
 * Implementing a simple search that will only query off of one field
 * So taking a kind of hacky approach and pulling off matching first query
 */
router.get("/", async (req, res) => {
  const queryParams = Object.keys(req.query);
  const queryValues = Object.values(req.query);

  // If search term is invalid for users then return invalid search
  if (!Object.values(ETicketFields).includes(queryParams[0])) {
    return res.send({ valid: false });
  }

  // If search term is valid, return 1st users that matches the query
  if (queryParams.length > 0) {
    const orangeShineQuery: OrangeShineQuery = {
      searchTerm: queryParams[0],
      searchValue: queryValues[0] as string | '',
    }
    const controller = new TicketController();
    const response = await controller.getTicket(orangeShineQuery);
    if (response)
      return res.send({ valid: true, ...response });
  }

  return res.send({ valid: false });
});

export default router;
