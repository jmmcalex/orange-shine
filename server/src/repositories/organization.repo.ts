import { getRepository } from 'typeorm';
import { Organization } from '../entity/Organization';
import { OrangeShineQuery } from '../types';


export const getOrganization = async ({searchTerm, searchValue}: OrangeShineQuery): Promise<Organization> => {
  return await getRepository(Organization)
    .createQueryBuilder()
    .where(`organization.${searchTerm} = :${searchTerm}`, { [searchTerm]: searchValue })
    .getOne()
}
