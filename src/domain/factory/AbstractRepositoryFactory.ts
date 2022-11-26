import { IPostRepository } from '../repositories/IPostRepository'
import { IUserRepository } from '../repositories/IUserRepository'

export abstract class AbstractRepositoryFactory {
  abstract getPostRepository(): IPostRepository
  abstract getUserRepository(): IUserRepository
}
