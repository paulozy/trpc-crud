import crypto from 'node:crypto'

export class Post {
  id?: string
  title: string
  content: string
  authorId: string

  constructor({ id, title, content, authorId }: Post) {
    this.title = title
    this.content = content
    this.authorId = authorId

    if (!id) {
      this.id = crypto.randomBytes(8).toString('hex')
    }
  }
}
