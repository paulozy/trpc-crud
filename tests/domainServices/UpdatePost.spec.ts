import { UpdatePostUseCase } from '../../src/domain/usecases/Post/UpdatePostUseCase'
import { PostInMemoryRepository } from '../../src/shared/infra/repositories/inMemory/PostInMemoryRepository'

const makeSut = () => {
  const postRepository = new PostInMemoryRepository()
  return new UpdatePostUseCase(postRepository)
}

describe('Update Post Domain Service', () => {
  test('should delete a post', async () => {
    const sut = makeSut()
    const result = await sut.update('adc1724a-88bf-432e-92c9-d41786ab9a56', {
      title: 'Working with TDD',
      content: 'Working with TDD lorem ipsum dolor sit amet',
      authorId: 'c569dba5-783a-4bb1-90d2-a2ce521feb96',
    })

    expect(result).toEqual({
      id: 'adc1724a-88bf-432e-92c9-d41786ab9a56',
      title: 'Working with TDD',
      content: 'Working with TDD lorem ipsum dolor sit amet',
      authorId: 'c569dba5-783a-4bb1-90d2-a2ce521feb96',
    })
  })
})
