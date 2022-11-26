import { Post } from '../../../../domain/entities/Post'
import { IPostRepository } from '../../../../domain/repositories/IPostRepository'

export class PostInMemoryRepository implements IPostRepository {
  posts: Post[] = [
    {
      id: '837ad5dc-8096-4157-80d5-083413ff256a',
      title: 'Utilizando tRPC no backend',
      content: 'Utilizando tRPC no backend lorem ipsum dolor sit amet',
      authorId: 'c569dba5-783a-4bb1-90d2-a2ce521feb96',
    },
    {
      id: 'adc1724a-88bf-432e-92c9-d41786ab9a56',
      title: 'any_title',
      content: 'any_content',
      authorId: 'c569dba5-783a-4bb1-90d2-a2ce521feb96',
    },
    {
      id: 'f438c029-ac07-4190-8fa6-1735b22ec294',
      title: 'any_title_2',
      content: 'any_content_2',
      authorId: 'c569dba5-783a-4bb1-90d2-a2ce521feb94',
    },
  ]

  async save(post: Post): Promise<Post> {
    this.posts.push(post)
    return post
  }

  async findById(id: string): Promise<Post> {
    const post = this.posts.filter((post) => post.id === id)
    return post[0]
  }

  async findByAuthorId(authorId: string): Promise<Post[]> {
    const posts = this.posts.filter((post) => post.authorId === authorId)
    return Promise.resolve(posts)
  }

  async delete(id: string): Promise<void> {
    this.posts = this.posts.filter((post) => post.id !== id)
  }

  async update(id: string, post: Post): Promise<Post> {
    const postExists = this.posts.filter((post) => post.id === id)

    const updatedPost = Object.assign(postExists[0], post)

    return updatedPost
  }
}
