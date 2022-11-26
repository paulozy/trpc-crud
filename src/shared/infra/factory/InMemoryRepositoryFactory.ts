import { AbstractRepositoryFactory } from '../../../domain/factory/AbstractRepositoryFactory'
import { IPostRepository } from '../../../domain/repositories/IPostRepository'
import { IUserRepository } from '../../../domain/repositories/IUserRepository'
import { PostInMemoryRepository } from '../repositories/inMemory/PostInMemoryRepository'
import { UserInMemoryRepository } from '../repositories/inMemory/UserInMemoryRepository'

export class InMemoryRepositoryFactory extends AbstractRepositoryFactory {
  getPostRepository(): IPostRepository {
    return new PostInMemoryRepository()
  }
  getUserRepository(): IUserRepository {
    return new UserInMemoryRepository()
  }
}
