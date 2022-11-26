import { Post } from '../../entities/Post'
import { IPostRepository } from '../../repositories/IPostRepository'

export class SavePostUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  async save(post: Post): Promise<Post> {
    const postCreated = await this.postRepository.save(post)
    return postCreated
  }
}
