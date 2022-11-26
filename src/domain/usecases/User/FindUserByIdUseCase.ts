import { User } from '../../entities/User'
import { AbstractRepositoryFactory } from '../../factory/AbstractRepositoryFactory'

export class FindUserByIdUseCase {
  constructor(private readonly repositoryFactory: AbstractRepositoryFactory) {}

  async findById(id: string): Promise<User> {
    const userRepository = this.repositoryFactory.getUserRepository()

    const user = await userRepository.findById(id)
    return user
  }
}
