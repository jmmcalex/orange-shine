import * as express from "express";
import OrganizationRouter from "../controllers/organization.controller";
import { EOrganizationFields } from "../entity/Organization";
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
  if (!Object.values(EOrganizationFields).includes(queryParams[0])) {
    return res.send({ valid: false });
  }

  // If search term is valid, return 1st users that matches the query
  if (queryParams.length > 0) {
    const orangeShineQuery: OrangeShineQuery = {
      searchTerm: queryParams[0],
      searchValue: queryValues[0] as string | '',
    };
    const controller = new OrganizationRouter();
    const response = await controller.getOrganization(orangeShineQuery);
    if (response)
      return res.send({ valid: true, ...response });
  }

  return res.send({ valid: false });
});

export default router;
