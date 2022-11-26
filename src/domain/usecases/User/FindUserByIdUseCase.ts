import { User } from '../../entities/User'
import { IUserRepository } from '../../repositories/IUserRepository'

export class FindUserByIdUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async findById(id: string): Promise<User> {
    const user = await this.userRepository.findById(id)
    return user
  }
}
