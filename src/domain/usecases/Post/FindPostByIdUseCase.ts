import { Post } from '../../entities/Post'
import { IPostRepository } from '../../repositories/IPostRepository'

export class FindPostByIdUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  async findById(id: string): Promise<Post> {
    const post = await this.postRepository.findById(id)
    return post
  }
}
