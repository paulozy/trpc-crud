import { SavePostUseCase } from '../../src/domain/usecases/Post/SavePostUseCase'
import { InMemoryRepositoryFactory } from '../../src/shared/infra/factory/InMemoryRepositoryFactory'

const makeSut = () => {
  const postRepository = new InMemoryRepositoryFactory()
  return new SavePostUseCase(postRepository)
}

describe('Save Post Domain Service', () => {
  const fakePost = {
    id: 'any_post_id',
    title: 'any_title',
    content: 'any_content',
    authorId: 'c569dba5-783a-4bb1-90d2-a2ce521feb96',
  }

  test('should save a new post', async () => {
    const sut = makeSut()
    const result = await sut.save(fakePost)

    expect(result).toEqual(fakePost)
  })
})
