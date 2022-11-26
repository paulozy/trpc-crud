import { DeletePostUseCase } from '../../src/domain/usecases/Post/DeletePostUseCase'
import { InMemoryRepositoryFactory } from '../../src/shared/infra/factory/InMemoryRepositoryFactory'

const makeSut = () => {
  const postRepository = new InMemoryRepositoryFactory()
  return new DeletePostUseCase(postRepository)
}

describe('Delete Post Domain Service', () => {
  test('should delete a post', async () => {
    const sut = makeSut()
    const result = await sut.delete('adc1724a-88bf-432e-92c9-d41786ab9a56')
    expect(result).toBeUndefined()
  })
})
