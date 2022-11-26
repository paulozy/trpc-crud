import crypto from 'node:crypto'
import { User } from './User'

export class Post {
  id?: string
  title: string
  content: string
  author: User

  constructor({ id, title, content, author }: Post) {
    this.title = title
    this.content = content
    this.author = author

    if (!id) {
      this.id = crypto.randomBytes(8).toString('hex')
    }
  }
}
