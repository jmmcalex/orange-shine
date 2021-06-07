import { User } from "../entity/User";
import { getUser } from "../repositories/user.repo";
import { OrangeShineQuery } from "../types";


export default class UserController {
  public async getUser(query: OrangeShineQuery): Promise<User> {
    return getUser(query);
  }
}
