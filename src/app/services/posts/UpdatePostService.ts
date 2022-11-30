import { Post } from '../../../domain/entities/Post'
import { AbstractRepositoryFactory } from '../../../domain/factory/AbstractRepositoryFactory'
import { FindPostByIdUseCase } from '../../../domain/usecases/Post/FindPostByIdUseCase'
import { UpdatePostUseCase } from '../../../domain/usecases/Post/UpdatePostUseCase'
import { IOutput } from '../../interfaces'

export class UpdatePostService {
  constructor(private readonly repositoryFactory: AbstractRepositoryFactory) {}

  async execute(id: string, post: Post): Promise<IOutput> {
    try {
      const findPost = new FindPostByIdUseCase(this.repositoryFactory)

      const postExists = await findPost.findById(id)

      if (!postExists) {
        throw new Error('Post not found')
      }

      const updatePost = new UpdatePostUseCase(this.repositoryFactory)

      const postUpdated = await updatePost.update(id, post)

      return {
        statusCode: 200,
        message: 'Updated successfully',
        result: postUpdated,
      }
    } catch (error) {
      return {
        statusCode: 400,
        message: 'Error on update post',
        result: error,
      }
    }
  }
}
