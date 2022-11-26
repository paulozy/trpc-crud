import { Post } from '../../entities/Post'
import { AbstractRepositoryFactory } from '../../factory/AbstractRepositoryFactory'

export class UpdatePostUseCase {
  constructor(private readonly repositoryFactory: AbstractRepositoryFactory) {}

  async update(id: string, post: Post): Promise<Post> {
    const postRepository = this.repositoryFactory.getPostRepository()

    const postUpdated = await postRepository.update(id, post)
    return postUpdated
  }
}
