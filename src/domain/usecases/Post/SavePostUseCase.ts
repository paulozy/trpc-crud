import { Post } from '../../entities/Post'
import { AbstractRepositoryFactory } from '../../factory/AbstractRepositoryFactory'

export class SavePostUseCase {
  constructor(private readonly repositoryFactory: AbstractRepositoryFactory) {}

  async save(post: Post): Promise<Post> {
    const postRepository = this.repositoryFactory.getPostRepository()

    const postCreated = await postRepository.save(post)
    return postCreated
  }
}
