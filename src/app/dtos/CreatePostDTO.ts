export class CreatePostDTO {
  title: string
  content: string
  authorId: string

  constructor({ title, content, authorId }: CreatePostDTO) {
    this.title = title
    this.content = content
    this.authorId = authorId
  }
}
