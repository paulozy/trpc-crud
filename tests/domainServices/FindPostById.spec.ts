import { FindPostByIdUseCase } from '../../src/domain/usecases/Post/FindPostByIdUseCase'
import { PostInMemoryRepository } from '../../src/shared/infra/repositories/inMemory/PostInMemoryRepository'

const makeSut = () => {
  const postRepository = new PostInMemoryRepository()
  return new FindPostByIdUseCase(postRepository)
}

describe('Find Post by id Domain Servic', () => {
  test('should return a post on success', async () => {
    const sut = makeSut()
    const result = await sut.findById('837ad5dc-8096-4157-80d5-083413ff256a')

    expect(result).toEqual({
      id: '837ad5dc-8096-4157-80d5-083413ff256a',
      title: 'Utilizando tRPC no backend',
      content: 'Utilizando tRPC no backend lorem ipsum dolor sit amet',
      authorId: 'c569dba5-783a-4bb1-90d2-a2ce521feb96',
    })
  })
})
