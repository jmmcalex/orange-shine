import { getRepository } from 'typeorm';
import { Ticket } from '../entity/Ticket';
import { OrangeShineQuery } from '../types';


export const getTicket = async ({searchTerm, searchValue}: OrangeShineQuery): Promise<Ticket> => {
  return await getRepository(Ticket)
    .createQueryBuilder()
    .where(`ticket.${searchTerm} = :${searchTerm}`, { [searchTerm]: searchValue })
    .getOne();
}

export const getTicketByUserId = async (userId: number): Promise<Ticket[]> => {
  return await getRepository(Ticket)
    .createQueryBuilder()
    .where("ticket.submitter_id = :id OR ticket.assignee_id = :id", { id: userId })
    .getMany();
}
