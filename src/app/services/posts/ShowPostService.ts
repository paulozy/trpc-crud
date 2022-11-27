import { AbstractRepositoryFactory } from '../../../domain/factory/AbstractRepositoryFactory'
import { FindPostByIdUseCase } from '../../../domain/usecases/Post/FindPostByIdUseCase'

export class ShowPostService {
  constructor(private readonly repositoryFactory: AbstractRepositoryFactory) {}

  async execute(id: string) {
    try {
      const findPost = new FindPostByIdUseCase(this.repositoryFactory)

      const post = await findPost.findById(id)

      if (!post) {
        throw new Error('Post not found')
      }

      return {
        statusCode: 200,
        message: 'Showed successfully',
        result: post,
      }
    } catch (error) {
      return {
        statusCode: 400,
        message: 'Error showing post',
        result: error,
      }
    }
  }
}
