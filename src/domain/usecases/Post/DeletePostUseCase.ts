import { AbstractRepositoryFactory } from '../../factory/AbstractRepositoryFactory'

export class DeletePostUseCase {
  constructor(private readonly repositoryFactory: AbstractRepositoryFactory) {}

  async delete(id: string): Promise<void> {
    const postRepository = this.repositoryFactory.getPostRepository()

    await postRepository.delete(id)
  }
}
