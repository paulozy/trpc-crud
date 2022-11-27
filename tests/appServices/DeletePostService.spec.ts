import { DeletePostService } from '../../src/app/services/posts/DeletePostService'
import { InMemoryRepositoryFactory } from '../../src/shared/infra/factory/InMemoryRepositoryFactory'

interface SutTypes {
  sut: DeletePostService
}

const makeSut = (): SutTypes => {
  const fakeRepositoryFactory = new InMemoryRepositoryFactory()
  const sut = new DeletePostService(fakeRepositoryFactory)

  return {
    sut,
  }
}

describe('Delete Post Service', () => {
  test('Should delete a post on success', async () => {
    const { sut } = makeSut()
    const result = await sut.execute('837ad5dc-8096-4157-80d5-083413ff256a')

    expect(result.statusCode).toBe(200)
    expect(result.message).toBe('Post deleted successfully')
  })

  test('Should return an error if post does not exist', async () => {
    const { sut } = makeSut()
    const result = await sut.execute('invalid_id')

    expect(result.statusCode).toBe(400)
    expect(result.message).toBe('Error deleting post')
  })
})
