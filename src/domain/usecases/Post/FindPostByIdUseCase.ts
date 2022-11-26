import { Post } from '../../entities/Post'
import { AbstractRepositoryFactory } from '../../factory/AbstractRepositoryFactory'

export class FindPostByIdUseCase {
  constructor(private readonly repositoryFactory: AbstractRepositoryFactory) {}

  async findById(id: string): Promise<Post> {
    const postRepository = this.repositoryFactory.getPostRepository()

    const post = await postRepository.findById(id)
    return post
  }
}
