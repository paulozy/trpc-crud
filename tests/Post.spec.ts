import { Post } from '../src/domain/entities/Post'

describe('Post Entity', () => {
  const postInput = {
    title: 'any_title',
    content: 'any_content',
    authorId: 'c569dba5-783a-4bb1-90d2-a2ce521feb96',
  }

  test('Should create a new post on succes', () => {
    const post = new Post(postInput)

    expect(post.id).toBeTruthy()
    expect(post.title).toBe(postInput.title)
    expect(post.content).toBe(postInput.content)
    expect(post.authorId).toBe(postInput.authorId)
  })
})
