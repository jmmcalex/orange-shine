import * as express from 'express';
import UserRouter from './user.router';
import TicketRouter from './ticket.router';
import OrganizationRouter from './organization.router';

const router = express.Router();
router.use("/user", UserRouter);
router.use("/ticket", TicketRouter);
router.use("/organization", OrganizationRouter);

export default router;
