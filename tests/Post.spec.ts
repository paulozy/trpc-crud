import crypto from 'node:crypto'
import { Post } from '../src/domain/entities/Post'

describe('Post Entity', () => {
  const postInput = {
    title: 'any_title',
    content: 'any_content',
    author: {
      id: crypto.randomBytes(8).toString('hex'),
      name: 'any_name',
      email: 'any_email',
      password: 'any_password',
    },
  }

  test('Should create a new post on succes', () => {
    const post = new Post(postInput)

    expect(post.id).toBeTruthy()
    expect(post.title).toBe(postInput.title)
    expect(post.content).toBe(postInput.content)
    expect(post.author).toBe(postInput.author)
  })
})
