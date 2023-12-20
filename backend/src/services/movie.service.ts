import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { HttpStatus, HttpException } from '@nestjs/common';
import { getAxiosInstance } from 'src/utils/axios';
import { Movie, MovieError } from 'src/interfaces/movie';

@Injectable()
export class MovieService {
  async searchMovie(search: string): Promise<Movie | MovieError> {
    try {
      const response: AxiosResponse<Movie | MovieError> =
        await getAxiosInstance().get('/', {
          params: { apikey: process.env.OMDB_API_KEY, t: search },
        });
      return response.data;
    } catch (err) {
      console.log(err);
      throw new HttpException(
        { message: 'Internal Server Error' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
