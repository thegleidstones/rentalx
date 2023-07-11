import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

@injectable()
class ListUserUSeCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: UsersRepository
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.list();
    return users;
  }
}

export { ListUserUSeCase };
