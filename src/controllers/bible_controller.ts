import { Request, Response } from 'express';
import { BibliaDigitalRepository } from '../repository/a_biblia_digital';

class BibleController {
  async index(request: Request, response: Response) {
    try {
      const bibliaRepository = new BibliaDigitalRepository();
const {data} = await bibliaRepository.getRandomVerse();
      return response.status(200).json({
        mensage: 'OK',
        response: data,
      });
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { BibleController };
