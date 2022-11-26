import { Post } from '../../entities/Post'
import { IPostRepository } from '../../repositories/IPostRepository'

export class UpdatePostUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  async update(id: string, post: Post): Promise<Post> {
    const postUpdated = await this.postRepository.update(id, post)
    return postUpdated
  }
}
