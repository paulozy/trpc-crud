import { Post } from '../entities/Post'

export interface IPostRepository {
  save(post: Post): Promise<Post>
  findById(id: string): Promise<Post>
  findByAuthorId(authorId: string): Promise<Post[]>
  delete(id: string): Promise<void>
  update(id: string, post: Post): Promise<Post>
}
