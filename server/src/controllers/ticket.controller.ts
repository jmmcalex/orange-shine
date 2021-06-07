import { Ticket } from "../entity/Ticket";
import { getTicket, getTicketByUserId } from "../repositories/ticket.repo";
import { OrangeShineQuery } from "../types";


export default class TicketController {
  public async getTicket(query: OrangeShineQuery): Promise<Ticket> {
    return getTicket(query);
  }

  public async getTicketByUserId(userId: number): Promise<Ticket[]> {
    return getTicketByUserId(userId);
  }
}
