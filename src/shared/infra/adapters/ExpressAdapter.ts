import express, { Request, Response } from 'express'
import { HttpServer } from '../api/HttpServer'

export class ExpressAdapter implements HttpServer {
  app: any

  constructor() {
    this.app = express()
    this.app.use(express.json())
  }

  on(method: string, url: string, callback: Function): void {
    this.app[method](url, async (req: Request, res: Response) => {
      const response = await callback(req.params, req.body)

      res.status(response.statusCode).json(response)
    })
  }

  listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`)
    })
  }
}
