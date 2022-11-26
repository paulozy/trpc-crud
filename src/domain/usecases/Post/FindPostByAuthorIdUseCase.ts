import { Post } from '../../entities/Post'
import { AbstractRepositoryFactory } from '../../factory/AbstractRepositoryFactory'

export class FindPostByAuthorIdUseCase {
  constructor(private readonly repositoryFactory: AbstractRepositoryFactory) {}

  async findByAuthorId(auhtorId: string): Promise<Post[]> {
    const postRepository = this.repositoryFactory.getPostRepository()

    const posts = await postRepository.findByAuthorId(auhtorId)
    return posts
  }
}
