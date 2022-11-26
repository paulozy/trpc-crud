import { AbstractRepositoryFactory } from '../../factory/AbstractRepositoryFactory'

export class DeleteUserUseCase {
  constructor(private readonly repositoryFactory: AbstractRepositoryFactory) {}

  async delete(id: string): Promise<void> {
    const userRepository = this.repositoryFactory.getUserRepository()

    await userRepository.delete(id)
  }
}
