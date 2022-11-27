import { CreatePostDTO } from '../../src/app/dtos/CreatePostDTO'
import { CreatePostService } from '../../src/app/services/posts/CreatePostService'
import { InMemoryRepositoryFactory } from '../../src/shared/infra/factory/InMemoryRepositoryFactory'

describe('Create Post Service', () => {
  test('Should create a new post with correct values', async () => {
    const input = new CreatePostDTO({
      title: 'any_title',
      content: 'any_content',
      authorId: '837ad5dc-8096-4157-80d5-083413ff256a',
    })

    const fakeRepositoryFactory = new InMemoryRepositoryFactory()
    const sut = new CreatePostService(fakeRepositoryFactory)

    const result = await sut.execute(input)

    expect(result).toHaveProperty('id')
    expect(result.title).toBe(input.title)
    expect(result.content).toBe(input.content)
    expect(result.authorId).toBe(input.authorId)
  })

  test('Should throw an error if author not found', async () => {
    const input = new CreatePostDTO({
      title: 'any_title',
      content: 'any_content',
      authorId: 'any_author_id',
    })

    const fakeRepositoryFactory = new InMemoryRepositoryFactory()
    const sut = new CreatePostService(fakeRepositoryFactory)

    await expect(sut.execute(input)).rejects.toThrow()
  })
})
