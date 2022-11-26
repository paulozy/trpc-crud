import { User } from '../entities/User'

export interface IUserRepository {
  save(user: User): Promise<User>
  findById(id: string): Promise<User>
  findByAuthorId(authorId: string): Promise<User[]>
  delete(id: string): Promise<void>
  update(id: string, user: User): Promise<User>
}
