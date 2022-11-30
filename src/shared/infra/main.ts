import { ExpressAdapter } from './adapters/ExpressAdapter'
import { Router } from './api/Router'
import { InMemoryRepositoryFactory } from './factory/InMemoryRepositoryFactory'

const httpServer = new ExpressAdapter()

const repositoryFactory = new InMemoryRepositoryFactory()
const router = new Router(httpServer, repositoryFactory)
router.initRoutes()
httpServer.listen(3333)
