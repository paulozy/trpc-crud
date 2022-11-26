import { User } from '../../entities/User'
import { IUserRepository } from '../../repositories/IUserRepository'

export class SaveUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async save(user: User): Promise<User> {
    const userCreated = await this.userRepository.save(user)
    return userCreated
  }
}
