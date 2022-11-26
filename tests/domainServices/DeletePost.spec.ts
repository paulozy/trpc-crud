import { DeletePostUseCase } from '../../src/domain/usecases/Post/DeletePostUseCase'
import { PostInMemoryRepository } from '../../src/shared/infra/repositories/inMemory/PostInMemoryRepository'

const makeSut = () => {
  const postRepository = new PostInMemoryRepository()
  return new DeletePostUseCase(postRepository)
}

describe('Delete Post Domain Service', () => {
  test('should delete a post', async () => {
    const sut = makeSut()
    const result = await sut.delete('adc1724a-88bf-432e-92c9-d41786ab9a56')
    expect(result).toBeUndefined()
  })
})
