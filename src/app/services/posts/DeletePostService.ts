import { AbstractRepositoryFactory } from '../../../domain/factory/AbstractRepositoryFactory'
import { DeletePostUseCase } from '../../../domain/usecases/Post/DeletePostUseCase'
import { FindPostByIdUseCase } from '../../../domain/usecases/Post/FindPostByIdUseCase'
import { IDeletionOutput } from '../../interfaces'

export class DeletePostService {
  constructor(private readonly repositoryFactory: AbstractRepositoryFactory) {}

  async execute(id: string): Promise<IDeletionOutput> {
    try {
      const findPost = new FindPostByIdUseCase(this.repositoryFactory)

      const post = await findPost.findById(id)

      if (!post) {
        throw new Error('Post not found')
      }

      const deletePost = new DeletePostUseCase(this.repositoryFactory)

      await deletePost.delete(id)

      return {
        statusCode: 200,
        message: 'Post deleted successfully',
      }
    } catch (error) {
      return {
        statusCode: 400,
        message: 'Error deleting post',
      }
    }
  }
}
