import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import { OrangeShineQuery } from '../types';


export const getUser = async ({searchTerm, searchValue}: OrangeShineQuery): Promise<User> => {
  return await getRepository(User)
    .createQueryBuilder()
    .where(`user.${searchTerm} = :${searchTerm}`, { [searchTerm]: searchValue })
    .getOne()
}
