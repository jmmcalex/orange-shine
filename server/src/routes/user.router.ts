import * as express from "express";
import OrganizationController from "../controllers/organization.controller";
import TicketController from "../controllers/ticket.controller";
import UserController from "../controllers/user.controller";
import { EUserFields } from "../entity/User";
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
  if (!Object.values(EUserFields).includes(queryParams[0])) {
    return res.send({ valid: false });
  }

  // If search term is valid, return 1st users that matches the query
  if (queryParams.length > 0) {
    const orangeShineQuery: OrangeShineQuery = {
      searchTerm: queryParams[0],
      searchValue: queryValues[0] as string | '',
    }
    const controller = new UserController();
    const response = await controller.getUser(orangeShineQuery);

    // Should be doing joins on user and orgs to get this, but i spent half a day on this library and
    // I need to catch up on other some personal stuff. I realize this is hacky and inefficient
    if (response) {
      let organization;
      const ticketController = new TicketController();
      const tickets = (await ticketController.getTicketByUserId(response._id)).map(e => e.subject);
      if (response.organization_id) {
        const orgController = new OrganizationController();
        organization = (await orgController.getOrganization({ searchTerm: '_id', searchValue: response.organization_id.toString() }));
        organization = organization.name ? organization.name : '';
      }
      return res.send({ 'valid': true, 'organization': organization, 'tickets': tickets, ...response });
    }
  }

  return res.send({valid: false});
});

export default router;
