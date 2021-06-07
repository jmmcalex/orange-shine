import { Organization } from "../entity/Organization";
import { getOrganization } from "../repositories/organization.repo";
import { OrangeShineQuery } from "../types";


export default class OrganizationController {
  public async getOrganization(query: OrangeShineQuery): Promise<Organization> {
    return getOrganization(query);
  }
}
