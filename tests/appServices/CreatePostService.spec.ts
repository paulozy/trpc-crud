import { CreatePostDTO } from '../../src/app/dtos/CreatePostDTO'
import { CreatePostService } from '../../src/app/services/posts/CreatePostService'
import { InMemoryRepositoryFactory } from '../../src/shared/infra/factory/InMemoryRepositoryFactory'

interface SutTypes {
  input: CreatePostDTO
  sut: CreatePostService
}

const makeSut = (): SutTypes => {
  const input = new CreatePostDTO({
    title: 'any_title',
    content: 'any_content',
    authorId: '837ad5dc-8096-4157-80d5-083413ff256a',
  })

  const fakeRepositoryFactory = new InMemoryRepositoryFactory()
  const sut = new CreatePostService(fakeRepositoryFactory)

  return {
    input,
    sut,
  }
}

describe('Create Post Service', () => {
  test('Should create a new post with correct values', async () => {
    const { input, sut } = makeSut()

    const response = await sut.execute(input)

    expect(response.result).toHaveProperty('id')
    expect(response.result.title).toBe(input.title)
    expect(response.result.content).toBe(input.content)
    expect(response.result.authorId).toBe(input.authorId)
  })

  test('Should throw an error if author not found', async () => {
    const { sut, input } = makeSut()

    const inputWithInvalidId = {
      ...input,
      authorId: 'invalid_id',
    }

    const response = await sut.execute(inputWithInvalidId)

    expect(response.statusCode).toBe(400)
    expect(response.message).toBe('Error creating post')
  })
})
