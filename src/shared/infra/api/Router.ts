import { CreatePostService } from '../../../app/services/posts/CreatePostService'
import { DeletePostService } from '../../../app/services/posts/DeletePostService'
import { ShowPostService } from '../../../app/services/posts/ShowPostService'
import { AbstractRepositoryFactory } from '../../../domain/factory/AbstractRepositoryFactory'
import { HttpServer } from './HttpServer'

export class Router {
  constructor(
    private readonly httpServer: HttpServer,
    private readonly repositoryFactory: AbstractRepositoryFactory
  ) {}

  async initRoutes() {
    this.httpServer.on('post', '/posts', async (_params: any, body: any) => {
      const createPostService = new CreatePostService(this.repositoryFactory)
      const response = await createPostService.execute(body)
      return response
    })

    this.httpServer.on('get', '/posts/:id', async (params: any, _body: any) => {
      const showPostService = new ShowPostService(this.repositoryFactory)
      const response = await showPostService.execute(params.id)
      return response
    })

    this.httpServer.on(
      'delete',
      '/posts/:id',
      async (params: any, _body: any) => {
        const deletePostService = new DeletePostService(this.repositoryFactory)

        const response = await deletePostService.execute(params.id)

        return response
      }
    )
  }
}
