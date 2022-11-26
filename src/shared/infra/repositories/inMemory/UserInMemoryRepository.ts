import { User } from '../../../../domain/entities/User'
import { IUserRepository } from '../../../../domain/repositories/IUserRepository'

export class UserInMemoryRepository implements IUserRepository {
  users: User[] = [
    {
      id: '837ad5dc-8096-4157-80d5-083413ff256a',
      name: 'any_name',
      email: 'any_email',
      password: 'any_password',
    },
    {
      id: 'c569dba5-783a-4bb1-90d2-a2ce521feb96',
      name: 'any_name_2',
      email: 'any_email_2',
      password: 'any_password_2',
    },
    {
      id: 'c569dba5-783a-4bb1-90d2-a2ce521feb94',
      name: 'any_name_3',
      email: 'any_email_3',
      password: 'any_password_3',
    },
  ]

  async save(user: User): Promise<User> {
    this.users.push(user)
    return user
  }

  async findById(id: string): Promise<User> {
    const user = this.users.filter((user) => user.id === id)
    return user[0]
  }

  async delete(id: string): Promise<void> {
    this.users = this.users.filter((user) => user.id !== id)
  }

  async update(id: string, user: User): Promise<User> {
    const userExists = this.users.filter((user) => user.id === id)

    const userUpdated = Object.assign(userExists[0], user)

    return userUpdated
  }
}
