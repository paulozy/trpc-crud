import { User } from '../../entities/User'
import { AbstractRepositoryFactory } from '../../factory/AbstractRepositoryFactory'

export class SaveUserUseCase {
  constructor(private readonly repositoryFactory: AbstractRepositoryFactory) {}

  async save(user: User): Promise<User> {
    const userRepository = this.repositoryFactory.getUserRepository()

    const userCreated = await userRepository.save(user)
    return userCreated
  }
}
