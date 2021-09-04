import { Request, Response } from 'express';

class UserController {
  async index(request: Request, response: Response) {
    try {
      return response.status(201).json({
        mensage: 'FEitao',
        response: ['teste', 'TEst4'],
      });
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { UserController };
