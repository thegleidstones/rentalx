import { Repository } from "typeorm";

import AppDataSource from "../../../../database";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({
    name,
    username,
    password,
    email,
    driver_licence,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      password,
      email,
      driver_licence,
    });

    await this.repository.save(user);
  }

  async findByName(name: string): Promise<User> {
    const user = await this.repository.findOne({ where: { name } });
    return user;
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();

    return users;
  }
}

export { UsersRepository };
