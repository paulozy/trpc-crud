import { Post } from '../../../domain/entities/Post'
import { AbstractRepositoryFactory } from '../../../domain/factory/AbstractRepositoryFactory'
import { SavePostUseCase } from '../../../domain/usecases/Post/SavePostUseCase'
import { FindUserByIdUseCase } from '../../../domain/usecases/User/FindUserByIdUseCase'
import { CreatePostDTO } from '../../dtos/CreatePostDTO'

export class CreatePostService {
  constructor(private readonly repositoryFactory: AbstractRepositoryFactory) {}

  async execute(createPostInput: CreatePostDTO): Promise<Post> {
    const { title, content, authorId } = createPostInput

    const findAuthor = new FindUserByIdUseCase(this.repositoryFactory)

    const author = await findAuthor.findById(authorId)

    if (!author) {
      throw new Error('Author not found')
    }

    const savePost = new SavePostUseCase(this.repositoryFactory)

    const post = new Post({
      title,
      content,
      authorId,
    })

    const postCreated = await savePost.save(post)

    return postCreated
  }
}
