import { User } from '../../entities/User'
import { AbstractRepositoryFactory } from '../../factory/AbstractRepositoryFactory'

export class UpdateUserUseCase {
  constructor(private readonly repositoryFactory: AbstractRepositoryFactory) {}

  async update(id: string, user: User): Promise<User> {
    const userRepository = this.repositoryFactory.getUserRepository()

    const userUpdated = await userRepository.update(id, user)
    return userUpdated
  }
}
