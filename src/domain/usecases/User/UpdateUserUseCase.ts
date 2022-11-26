import { User } from '../../entities/User'
import { IUserRepository } from '../../repositories/IUserRepository'

export class UpdateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async update(id: string, user: User): Promise<User> {
    const userUpdated = await this.userRepository.update(id, user)
    return userUpdated
  }
}
