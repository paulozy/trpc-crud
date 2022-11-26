import { Post } from '../../entities/Post'
import { IPostRepository } from '../../repositories/IPostRepository'

export class FindPostByAuthorIdUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  async findByAuthorId(auhtorId: string): Promise<Post[]> {
    const posts = await this.postRepository.findByAuthorId(auhtorId)
    return posts
  }
}
