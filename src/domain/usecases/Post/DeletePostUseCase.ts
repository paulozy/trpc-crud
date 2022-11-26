import { IPostRepository } from '../../repositories/IPostRepository'

export class DeletePostUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  async delete(id: string): Promise<void> {
    await this.postRepository.delete(id)
  }
}
